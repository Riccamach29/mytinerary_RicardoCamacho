import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative, Autoplay } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';

export default function SwiperCarousel({ images, autoplay = true, delay = 3000 }) {
  // Dividir las imágenes en grupos de 4
  const groupedImages = images.reduce((result, _, index, array) => {
    if (index % 4 === 0) {
      result.push(array.slice(index, index + 4));
    }
    return result;
  }, []);

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, EffectCreative, Autoplay]}
        spaceBetween={0}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        loop={true}
        autoplay={autoplay ? {
          delay: delay,
          disableOnInteraction: false
        } : false}
        breakpoints={{
          // Móviles: 1 imagen
          0: {
            slidesPerView: 1,
            grid: {
              rows: 1,
              fill: 'row'
            }
          },
          // Tablets: 2 imágenes por fila
          768: {
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          // Escritorio: 4 imágenes en grid 2x2 con 20% más de tamaño
          1024: {
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: 'row'
            },
            creativeEffect: {
              prev: {
                shadow: true,
                translate: ['-130%', 0, -600],
                scale: 1.2
              },
              next: {
                shadow: true,
                translate: ['130%', 0, -600],
                scale: 1.2
              },
            }
          }
        }}
        className="w-full"
      >
        {groupedImages.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="grid grid-cols-2 grid-rows-2 
              h-[300px] 
              sm:h-[400px] 
              md:h-[450px] 
              lg:h-[500px] 
              xl:h-[550px]
              bg-transparent 
              [&>*]:p-1"> {/* Añadido padding para eliminar líneas blancas */}
              {group.map((img, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg"
                >
                  <img 
                    src={img} 
                    alt={`Imagen ${groupIndex * 4 + index + 1}`} 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}