import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { X, Play, Camera, Video, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";

import Header from "@/components/Header";

import CollegeFooter from "@/components/CollegeFooter";

import { client, urlFor } from "@/sanity";

type YearGalleryItem = {
  _id: string;

  year: number;

  thumbnail: any;
};

type VideoItem = {
  _id: string;

  title: string;

  link: string;

  year?: number;
};

const GalleryPage = () => {
  const [yearItems, setYearItems] = useState<YearGalleryItem[]>([]);

  const [videoItems, setVideoItems] = useState<VideoItem[]>([]);

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const [filter, setFilter] = useState<"photos" | "videos">("photos");

  const [isYearsLoading, setIsYearsLoading] = useState(true);

  const [isVideosLoading, setIsVideosLoading] = useState(true);

  const [yearsError, setYearsError] = useState("");

  const [videosError, setVideosError] = useState("");

  // FETCH PHOTO YEARS
  useEffect(() => {
    const fetchYears = async () => {
      try {
        setIsYearsLoading(true);
        setYearsError("");

        const data = await client.fetch(`
          *[_type == "yearGallery"] | order(year desc){
            _id,
            year,
            thumbnail
          }
        `);

        setYearItems(data);
      } catch (error) {
        console.error("Error fetching gallery years:", error);

        setYearsError("Unable to load gallery years right now.");
      } finally {
        setIsYearsLoading(false);
      }
    };

    fetchYears();
  }, []);

  // FETCH VIDEOS
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsVideosLoading(true);
        setVideosError("");

        const data = await client.fetch(`
          *[_type == "video"] | order(_createdAt desc){
            _id,
            title,
            link,
            year
          }
        `);

        setVideoItems(data);
      } catch (error) {
        console.error("Error fetching videos:", error);

        setVideosError("Unable to load videos right now.");
      } finally {
        setIsVideosLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // YOUTUBE HELPERS
  const getYouTubeVideoId = (link: string) => {
    try {
      const url = new URL(link);

      const host = url.hostname.replace("www.", "");

      if (host === "youtu.be") {
        const id = url.pathname.split("/").filter(Boolean)[0];

        return id || "";
      }

      if (host === "youtube.com" || host === "m.youtube.com") {
        if (url.pathname === "/watch") {
          return url.searchParams.get("v") || "";
        }

        const parts = url.pathname.split("/").filter(Boolean);

        if (
          parts[0] === "embed" ||
          parts[0] === "shorts" ||
          parts[0] === "live"
        ) {
          return parts[1] || "";
        }
      }

      return "";
    } catch {
      return "";
    }
  };

  const getYouTubeEmbedLink = (link: string) => {
    const videoId = getYouTubeVideoId(link);

    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  const getYouTubeThumbnail = (link: string) => {
    const videoId = getYouTubeVideoId(link);

    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
  };

  const handleImageLoad = useCallback((id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  const openVideoModal = (video: VideoItem) => {
    setSelectedVideo(video);

    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);

    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Devamatha College</title>
        <meta
          name="description"
          content="Photo and video gallery from Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
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
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
          >
            Gallery
          </motion.h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              fill="hsl(var(--background))"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* CONTENT */}
      <section id="gallery-content" className="section-padding bg-background scroll-mt-32">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          {/* FILTER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              {
                value: "photos",
                label: "Photos",
                icon: Camera,
              },

              {
                value: "videos",
                label: "Videos",
                icon: Video,
              },
            ].map((filterOption) => (
              <Button
                key={filterOption.value}
                variant={filter === filterOption.value ? "default" : "outline"}
                onClick={() =>
                  setFilter(filterOption.value as "photos" | "videos")
                }
                className="flex items-center gap-2 px-4 py-2"
              >
                <filterOption.icon className="w-4 h-4" />

                {filterOption.label}
              </Button>
            ))}
          </motion.div>

          {filter === "photos" && isYearsLoading && (
            <p className="text-center text-muted-foreground">
              Loading gallery years...
            </p>
          )}

          {filter === "videos" && isVideosLoading && (
            <p className="text-center text-muted-foreground">
              Loading videos...
            </p>
          )}

          {filter === "photos" && yearsError && (
            <p className="text-center text-destructive">{yearsError}</p>
          )}

          {filter === "videos" && videosError && (
            <p className="text-center text-destructive">{videosError}</p>
          )}

          {filter === "photos" &&
            !isYearsLoading &&
            !yearsError &&
            yearItems.length === 0 && (
              <p className="text-center text-muted-foreground">
                No photo galleries found.
              </p>
            )}

          {filter === "videos" &&
            !isVideosLoading &&
            !videosError &&
            videoItems.length === 0 && (
              <p className="text-center text-muted-foreground">
                No videos found.
              </p>
            )}

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {/* PHOTO YEARS */}
            {filter === "photos" &&
              yearItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity:
                      !item.thumbnail || loadedImages.has(item._id) ? 1 : 0,

                    y: !item.thumbnail || loadedImages.has(item._id) ? 0 : 30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <Link
                    to={`/gallery/year/${item._id}`}
                    className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-md cursor-pointer block"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {item.thumbnail ? (
                        <img
                          src={urlFor(item.thumbnail).url()}
                          alt={`${item.year} gallery`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(item._id)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <CalendarDays className="w-12 h-12 text-muted-foreground" />
                        </div>
                      )}

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                            {item.year}
                          </h3>

                          <p className="text-white/80 text-xs sm:text-sm">
                            View albums
                          </p>
                        </div>
                      </div>

                      {/* ICON */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

            {/* VIDEOS */}
            {filter === "videos" &&
              videoItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: loadedImages.has(item._id) ? 1 : 0,

                    y: loadedImages.has(item._id) ? 0 : 30,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-md cursor-pointer"
                  onClick={() => openVideoModal(item)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={getYouTubeThumbnail(item.link)}
                      alt={item.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(item._id)}
                      className="w-full h-full object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent-foreground ml-1" />
                      </div>
                    </div>

                    {/* BADGE */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 py-1 bg-accent text-white text-xs rounded flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      Video
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeVideoModal}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <div className="relative aspect-video">
                <iframe
                  src={getYouTubeEmbedLink(selectedVideo.link)}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* CLOSE */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* TITLE */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {selectedVideo.title}
                </h3>

                {selectedVideo.year && (
                  <p className="text-white/60 text-xs mt-1">
                    {selectedVideo.year}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CollegeFooter />
    </>
  );
};

export default GalleryPage;
