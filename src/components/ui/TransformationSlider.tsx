import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type BeforeAfterImage = {
  before: string;
  after: string;
  description: string;
};

type TransformationSliderProps = {
  transformations: BeforeAfterImage[];
};

const TransformationSlider: React.FC<TransformationSliderProps> = ({ transformations }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      className="w-full py-12"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }}
    >
      {transformations.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-2xl p-6 shadow-luxury">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Before</p>
                <img
                  src={item.before}
                  alt="Before transformation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">After</p>
                <img
                  src={item.after}
                  alt="After transformation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-600">{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TransformationSlider;