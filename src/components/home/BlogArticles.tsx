
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogArticles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "The History of Swakopmund's German Architecture",
      excerpt: "Explore the unique architectural heritage of Swakopmund and how it reflects Namibia's colonial past.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      author: "Alois Kooper",
      date: "May 15, 2023",
      category: "History"
    },
    {
      id: 2,
      title: "Understanding the Nama and Ovaherero Genocide",
      excerpt: "An in-depth look at the historical events of 1904-1908 and their lasting impact on Namibia.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      author: "Maria Nakale",
      date: "April 22, 2023",
      category: "History"
    },
    {
      id: 3,
      title: "Top 5 Historical Sites to Visit in Swakopmund",
      excerpt: "Discover the must-see historical attractions that tell the story of Swakopmund's rich past.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      author: "Thomas Shilongo",
      date: "March 10, 2023",
      category: "Travel"
    },
    {
      id: 4,
      title: "Life in Mondesa Township: Then and Now",
      excerpt: "A comparative look at how Mondesa Township has evolved while preserving its cultural heritage.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      author: "John Muafangejo",
      date: "February 28, 2023",
      category: "Culture"
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 bg-kalahari-sand/20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-kalahari-gravel uppercase tracking-wider text-sm mb-2">Our Blog</h3>
          <h2 className="text-kalahari-darkbrown text-3xl md:text-4xl font-serif text-center">
            Historical Insights & Stories
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mt-4"></div>
          <p className="text-kalahari-charcoal/80 text-center max-w-2xl mt-4">
            Explore articles about Namibia's fascinating history, cultural heritage, and the stories behind the sites you'll visit on our tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow border-kalahari-gravel/20">
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center mb-3 text-xs text-kalahari-charcoal/70">
                  <span className="bg-kalahari-lightbrown/30 text-kalahari-darkbrown px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="font-serif text-lg text-kalahari-brown mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-kalahari-charcoal/80 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-5 py-4 border-t border-kalahari-gravel/10 flex justify-between items-center">
                <div className="flex items-center text-sm text-kalahari-charcoal/70">
                  <User size={14} className="mr-1" />
                  <span>{article.author}</span>
                </div>
                <Link
                  to={`/blog/${article.id}`}
                  className="text-kalahari-brown hover:text-kalahari-darkbrown transition-colors text-sm flex items-center"
                >
                  Read More <ArrowRight size={14} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center bg-kalahari-darkbrown hover:bg-kalahari-brown text-white font-medium transition-colors rounded-full py-3 px-8 group"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
