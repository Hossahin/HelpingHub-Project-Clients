import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <div className="md:w-11/12 mx-auto">
        <div className="reviews-carousel">
          <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 hover:scale-110 transition-all duration-800">
            Need Heading
          </h2>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/sm_friends.jpg?itok=FHTZDpkH"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://imgix.bustle.com/uploads/shutterstock/2019/7/25/af09e39b-adfb-4c33-bdfb-d185fdc78f55-shutterstock-1157410036.jpg?w=374&h=249&fit=crop&crop=faces&dpr=2"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://rusentinel.com/wp-content/uploads/2018/03/campuslife_hero-900x446.jpg"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl group">
                <img
                  src="https://uneveip.wordpress.com/wp-content/uploads/2017/12/36712-social-college.1200w.tn_.jpg"
                  alt="Enter to Win"
                  className="w-full h-full hover:bg-black/60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="w-11/12 flex justify-end">
            <div ref={progressCircle} className="progress-circle">
              <span ref={progressContent} className="progress-text">
                0s
              </span>
            </div>
          </div>
        </div>
        <div className="border border-dashed border-gray-200 dark:border-gray-700 my-6"></div>
      </div>
    </>
  );
};

export default HomeSlider;
