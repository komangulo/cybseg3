import { Button } from "@/components/ui/button";
import { categories } from "@/data/blogPosts";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category 
            ? "bg-primary text-primary-foreground" 
            : "border-primary/30 hover:border-primary/60 hover:bg-primary/10"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;