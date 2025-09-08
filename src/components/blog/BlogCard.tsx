import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <Card className="h-full service-card group-hover:scale-[1.02] transition-all duration-300">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {post.category}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {post.keywords.slice(0, 3).map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;