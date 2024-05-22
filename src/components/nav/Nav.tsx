import left from "../../img/left.png";
import right from "../../img/right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import banner1 from "../../img/banner1.webp";
import banner2 from "../../img/banner2.webp";
import banner3 from "../../img/banner3.webp";
import banner4 from "../../img/banner4.webp";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center w-[1300px]  mt-[150px] rounded-lg">
      <form className="w-[1300px] ml-[650px] ">
        <Swiper
          slidesPerView={1}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="h-[448px]"
        >
          <SwiperSlide>
            <img src={banner1} alt="" className="w-full h-full rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" className="w-full h-full rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" className="w-full h-full rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="" className="w-full h-full rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </form>
    </nav>
  );
}
