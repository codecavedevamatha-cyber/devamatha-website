import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  BookOpen,
  Microscope,
  Palette,
  X,
} from "lucide-react";

import Header from "@/components/Header";

import CollegeFooter from "@/components/CollegeFooter";

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

const NewsPage = () => {
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
          *[_type == "news"] | order(date desc){
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

        const formatted = data.map((item: NewsItem) => ({
          ...item,

          image: item.image ? urlFor(item.image).url() : "",

          icon: iconMap[item.category as keyof typeof iconMap] || Award,
        }));

        setNewsData(formatted);
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
      <Helmet>
        <title>News & Events | Devamatha College</title>
        <meta
          name="description"
          content="Latest news and events from Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="font-heading text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6"
          >
            College News & Events
          </motion.h1>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              fill="hsl(var(--background))"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-accent/3 rounded-full blur-[100px]" />

          <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <div className="space-y-8">
            {/* Featured */}
            {newsData.length > 0 && (
              <div
                className="relative bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl overflow-hidden border border-accent/20 shadow-2xl cursor-pointer"
                onClick={() => openNewsModal(newsData[0])}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-96 bg-black/5">
                    <img
                      src={newsData[0]?.image}
                      alt={newsData[0]?.title}
                      className="w-full h-full object-contain"
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
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/20 blur-xl" />

                <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.slice(1).map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item._id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                    onClick={() => openNewsModal(item)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-black/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
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
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
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
              className="relative max-w-4xl w-full max-h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl"
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
              <div className="relative h-64 md:h-80 overflow-hidden bg-black/5">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-contain"
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

      <CollegeFooter />
    </>
  );
};

export default NewsPage;
