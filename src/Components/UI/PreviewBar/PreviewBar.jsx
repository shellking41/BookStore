import React from "react";

import Style from "../../ComponentStyles/PreviewBar.module.css";
import Images from "../../../Data/Images.json";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function PreviewBar() {
  const colors = ["#804730", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];

  return (
    <Swiper modules={[Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 6000 }} pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
      {Images.map((item, index) => {
        const Color = colors[index % colors.length];
        return (
          <SwiperSlide key={uuidv4()}>
            <div className={Style.FlexBox} style={{ backgroundColor: Color }}>
              <img src={item} alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PreviewBar;
