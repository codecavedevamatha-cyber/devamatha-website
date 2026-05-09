import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Play, Calendar, MapPin, Camera, Video, ChevronLeft, ChevronRight, Maximize2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";

// Gallery data organized by year with real YouTube video IDs
const galleryData = {
  "2024": [
    {
      id: 1,
      type: "photo",
      title: "Annual Day Celebration",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      fullImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      date: "March 15, 2024",
      description: "Annual day celebration with cultural performances and award ceremony"
    },
    {
      id: 2,
      type: "photo",
      title: "Campus View - Morning",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      fullImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
      date: "January 10, 2024",
      description: "Beautiful morning view of the college campus"
    },
    {
      id: 3,
      type: "video",
      title: "College Promo Video",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      duration: "3:45",
      date: "March 1, 2024",
      description: "Official promotional video showcasing college facilities and campus life"
    },
    {
      id: 4,
      type: "photo",
      title: "Sports Meet 2024",
      thumbnail: "https://images.unsplash.com/photo-1461896836934- voices-1?w=800",
      fullImage: "https://images.unsplash.com/photo-1461896836934- voices-1?w=1200",
      date: "February 20, 2024",
      description: "Annual sports meet with various athletic competitions"
    },
    {
      id: 5,
      type: "photo",
      title: "Seminar & Workshops",
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
      fullImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200",
      date: "January 25, 2024",
      description: "Educational seminars and workshops for students"
    },
    {
      id: 6,
      type: "video",
      title: "Annual Day Highlights",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      videoId: "jNQXAC9IVRw",
      duration: "5:20",
      date: "March 16, 2024",
      description: "Highlights from the annual day celebration 2024"
    },
    {
      id: 7,
      type: "photo",
      title: "Library Hours",
      thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
      fullImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200",
      date: "February 5, 2024",
      description: "Students studying in the college library"
    },
    {
      id: 8,
      type: "video",
      title: "Campus Tour",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      videoId: "9bZkp7q19f0",
      duration: "8:15",
      date: "February 10, 2024",
      description: "Complete campus tour showcasing all facilities"
    },
    {
      id: 9,
      type: "photo",
      title: "Science Exhibition",
      thumbnail: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800",
      fullImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200",
      date: "March 1, 2024",
      description: "Annual science exhibition showcasing student projects"
    }
  ],
  "2023": [
    {
      id: 10,
      type: "photo",
      title: "Cultural Fest 2023",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      fullImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
      date: "December 10, 2023",
      description: "Annual cultural festival with various performances and competitions"
    },
    {
      id: 11,
      type: "video",
      title: "Graduation Ceremony 2023",
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
      videoId: "ScMzIvxBSi4",
      duration: "12:30",
      date: "April 20, 2023",
      description: "Graduation ceremony for the batch of 2023"
    },
    {
      id: 12,
      type: "photo",
      title: "Sports Competition",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      fullImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
      date: "November 15, 2023",
      description: "Inter-college sports competition hosted at our campus"
    }
  ],
  "2022": [
    {
      id: 13,
      type: "photo",
      title: "College Inauguration",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      fullImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
      date: "June 5, 2022",
      description: "Official inauguration ceremony of the college"
    },
    {
      id: 14,
      type: "video",
      title: "First Annual Day",
      thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
      videoId: "LXb3EKWsInQ",
      duration: "6:45",
      date: "March 25, 2022",
      description: "First annual day celebration of the college"
    }
  ]
};

// Get all years and flatten items for compatibility
const allYears = Object.keys(galleryData).sort((a, b) => parseInt(b) - parseInt(a));
const galleryItems = Object.values(galleryData).flat();

const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [filter, setFilter] = useState('all'); // 'all', 'photos', 'videos'

  const handleImageLoad = useCallback((id) => {
    setLoadedImages(prev => new Set(prev).add(id));
  }, []);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  // Filter items based on selected filter
  const getFilteredItems = (items) => {
    if (filter === 'all') return items;
    if (filter === 'photos') return items.filter(item => item.type === 'photo');
    if (filter === 'videos') return items.filter(item => item.type === 'video');
    return items;
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const navigatePhoto = (direction) => {
    const currentIndex = galleryItems.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedPhoto(galleryItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigatePhoto('prev');
      if (e.key === 'ArrowRight') navigatePhoto('next');
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
          >
            Gallery
          </motion.h1>
          
                  </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>


      {/* Gallery Grid - Year Wise Sections */}
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { value: 'all', label: 'All', icon: Camera },
              { value: 'photos', label: 'Photos', icon: Camera },
              { value: 'videos', label: 'Videos', icon: Video }
            ].map((filterOption) => (
              <Button
                key={filterOption.value}
                variant={filter === filterOption.value ? "default" : "outline"}
                onClick={() => setFilter(filterOption.value)}
                className="flex items-center gap-2 px-4 py-2"
              >
                <filterOption.icon className="w-4 h-4" />
                {filterOption.label}
              </Button>
            ))}
          </motion.div>

          {allYears.map((year, yearIndex) => (
            <div key={year} className="mb-12">
              {/* Year Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: yearIndex * 0.2 }}
                className="text-center mb-8"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {year}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </motion.div>

              {/* Year Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {getFilteredItems(galleryData[year]).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: loadedImages.has(item.id) ? 1 : 0, y: loadedImages.has(item.id) ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.15)" }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-md cursor-pointer"
                onClick={() => item.type === 'photo' ? openLightbox(item) : openVideoModal(item)}
              >
                <div className="aspect-video relative overflow-hidden">
                  {item.type === 'photo' ? (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        loading="lazy"
                        onLoad={() => handleImageLoad(item.id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                          <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-white mb-1 line-clamp-1">{item.title}</h3>
                          <p className="text-white/80 text-xs sm:text-sm">{item.date}</p>
                        </div>
                      </div>
                      {/* Zoom Icon */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground" />
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent-foreground ml-1" />
                        </div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {item.duration}
                      </div>
                      {/* Video Badge */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 py-1 bg-accent text-white text-xs rounded flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        Video
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-[90vh] mx-4">
              <img
                src={selectedPhoto.fullImage}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto('prev');
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto('next');
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Photo Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-heading text-xl font-bold text-white mb-1">{selectedPhoto.title}</h3>
                <p className="text-white/80 text-sm">{selectedPhoto.description}</p>
                <p className="text-white/60 text-xs mt-1">{selectedPhoto.date}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeVideoModal}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-heading text-xl font-bold text-white mb-1">{selectedVideo.title}</h3>
                <p className="text-white/80 text-sm">{selectedVideo.description}</p>
                <p className="text-white/60 text-xs mt-1">{selectedVideo.date} • Duration: {selectedVideo.duration}</p>
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
