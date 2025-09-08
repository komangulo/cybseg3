import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog CybSeg</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.keywords.join(", ")} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "CybSeg",
              "description": "Consultoría en ciberseguridad y servicios de protección digital"
            },
            "keywords": post.keywords.join(", "),
            "articleSection": post.category,
            "wordCount": post.content.split(' ').length,
            "timeRequired": post.readTime,
            "url": `/blog/${post.slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-cyber-bg-dark text-white">
        <Navbar />
        
        <main className="pt-20">
          {/* Header */}
          <section className="py-12 bg-gradient-to-br from-cyber-bg-dark via-cyber-bg-darker to-cyber-bg-dark">
            <div className="container mx-auto px-4">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
                <ArrowLeft className="h-4 w-4" />
                Volver al blog
              </Link>
              
              <article>
                <header className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {post.category}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                      className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} de lectura</span>
                    </div>
                  </div>
                </header>
              </article>
            </div>
          </section>

          {/* Featured Image */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(/\n/g, '<br />').replace(/###\s(.*?)(<br \/>|$)/g, '<h3>$1</h3>').replace(/##\s(.*?)(<br \/>|$)/g, '<h2>$1</h2>') 
                  }}
                />
                
                {/* Keywords */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">Palabras clave:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 bg-card/50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Artículos relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <Card className="h-full service-card group-hover:scale-[1.02] transition-all duration-300">
                        <CardContent className="p-6">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-32 object-cover rounded mb-4"
                          />
                          <Badge variant="secondary" className="bg-primary/20 text-primary mb-2">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;