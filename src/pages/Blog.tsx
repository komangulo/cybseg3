import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { blogPosts, getBlogPostsByCategory } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    let posts = getBlogPostsByCategory(selectedCategory);
    
    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    return posts;
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Blog de Ciberseguridad | Artículos y Guías de Seguridad Informática</title>
        <meta name="description" content="Descubre los mejores artículos sobre ciberseguridad, protección de datos, prevención de ciberataques y seguridad informática. Guías expertas para empresas." />
        <meta name="keywords" content="blog ciberseguridad, artículos seguridad informática, guías ciberataques, protección datos, consultoría ciberseguridad, pentesting, hacking ético" />
        <link rel="canonical" href="/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog de Ciberseguridad | CybSeg" />
        <meta property="og:description" content="Artículos especializados en ciberseguridad, protección de datos y prevención de ciberataques para empresas" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blog" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Ciberseguridad | CybSeg" />
        <meta name="twitter:description" content="Artículos especializados en ciberseguridad y protección de datos" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de Ciberseguridad CybSeg",
            "description": "Artículos especializados sobre ciberseguridad, protección de datos, prevención de ciberataques y seguridad informática",
            "url": "/blog",
            "publisher": {
              "@type": "Organization",
              "name": "CybSeg",
              "description": "Consultoría en ciberseguridad y servicios de protección digital"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "keywords": post.keywords.join(", "),
              "url": `/blog/${post.slug}`
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-cyber-bg-dark text-white">
        <Navbar />
        
        <main>
          <BlogHero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold mb-4">No se encontraron artículos</h3>
                  <p className="text-muted-foreground">
                    Prueba con otros términos de búsqueda o selecciona una categoría diferente.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;