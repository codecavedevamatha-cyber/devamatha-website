import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Microscope,
  Palette,
  X,
} from "lucide-react";

import { client, urlFor } from "@/sanity";

const iconMap = {
  Award,
  Users,
  BookOpen,
  Microscope,
  Palette,
};

type NewsItem = {
  _id: string;

  title: string;

  description: string;

  date: string;

  category?: string;

  image: any;

  time?: string;

  location?: string;
};

const NewsEventsSection = () => {
  const [newsData, setNewsData] = useState<any[]>([]);

  const [selectedNews, setSelectedNews] = useState<any>(null);

  // FORMAT DATE
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });
  };

  // FETCH NEWS
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "news"] | order(_createdAt desc ){
            _id,
            title,
            description,
            date,
            category,
            image,
            time,
            location
          }
        `);

        const newsWithIcons = data.map((item: NewsItem) => ({
          ...item,

          image: item.image ? urlFor(item.image).url() : "",

          icon: iconMap[item.category as keyof typeof iconMap] || Award,
        }));

        setNewsData(newsWithIcons);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const openNewsModal = (news: any) => {
    setSelectedNews(news);

    document.body.style.overflow = "hidden";
  };

  const closeNewsModal = () => {
    setSelectedNews(null);

    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-accent/3 rounded-full blur-[100px]" />

          <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-1"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                College News & Events
              </span>
            </motion.h2>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 80,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="h-1 bg-accent rounded-full mx-auto"
            />
          </div>

          {/* News Layout */}
          <div className="space-y-8">
            {/* Featured News */}
            {newsData.length > 0 && (
              <div
                className="relative bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl overflow-hidden border border-accent/20 shadow-2xl cursor-pointer"
                onClick={() => openNewsModal(newsData[0])}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative flex items-center justify-center bg-gray-50 min-h-64 lg:min-h-96 p-8 lg:p-12">
                    <img
                      src={newsData[0]?.image}
                      alt={newsData[0]?.title}
                      className="max-w-full max-h-full object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-accent" />

                      <span className="text-accent font-semibold">
                        {formatDate(newsData[0]?.date)}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {newsData[0]?.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 line-clamp-5">
                      {newsData[0]?.description}
                    </p>

                    <a
                      href="/news"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300 w-fit whitespace-nowrap"
                    >
                      View all news & events
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/20 blur-xl" />

                <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
              </div>
            )}

            {/* Grid */}
            <div className="pt-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {newsData.slice(1, 4).map((item) => {
                  return (
                    <article
                      key={item._id}
                      className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                      onClick={() => openNewsModal(item)}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden cursor-pointer bg-gray-50 p-4 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3 hover:text-accent transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {item.description}
                        </p>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />

                          <span>{formatDate(item.date)}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeNewsModal}
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeNewsModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-[calc(90vh-20rem)] overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent" />

                  <span className="text-accent font-semibold">
                    {formatDate(selectedNews.date)}
                  </span>

                  {selectedNews.category && (
                    <>
                      <span className="text-muted-foreground">•</span>

                      <span className="text-muted-foreground">
                        {selectedNews.category}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {selectedNews.title}
                </h2>

                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedNews.description}
                  </p>
                </div>

                {selectedNews.time && selectedNews.location && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="w-4 h-4" />

                      <span>{selectedNews.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />

                      <span>{selectedNews.location}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewsEventsSection;
