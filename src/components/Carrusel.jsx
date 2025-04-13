import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrusel = ({ images }) => {
  const swiperConfig = {
    modules: [Autoplay, Grid, Navigation, Pagination],
    loop: false,
    autoplay: { 
      delay: 3000, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true 
    },
    speed: 800,
    navigation: true,
    pagination: { 
      clickable: true,
      dynamicBullets: true
    },
    slidesPerView: 1,
    grid: { 
      rows: 1,
      fill: "grid" 
    },
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: { 
          rows: 2,
          fill: "grid"
        },
        spaceBetween: 15,
        slidesPerGroup: 2
      }
    },
    watchSlidesProgress: true,
    preventInteractionOnTransition: true
  };

  return (
    <Swiper {...swiperConfig}>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;