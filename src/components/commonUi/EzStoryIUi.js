import React, { useEffect, useState } from "react";
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import "swiper/css";
// Api
import { ezStoryApi } from "../../api/index";

const EzStoryIUi = () => {
  const [ezStoryItem, setEzStoryItem] = useState([]);

  useEffect(() => {
    ezStoryApi()
      .then((response) => {
        setEzStoryItem(response.data);
        console.log("이지스토리 성공!!!");
      }) 
      .catch((err) => console.log("이지스토리 에러!!!"));
  }, []);

  return (
    <section className="ezstory-sec sec">
      <h2 className="sec-tit">이지스토리</h2>
      <Swiper
        className="ezSwiper"
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
      >
        {
          ezStoryItem.map(item => {
            return (<SwiperSlide key={item.IDX}>
              <a href={item.LinkUrl} target='_blank' rel="noreferrer">
                <div className="img-box">
                  <img src={item.ThumbFileUrl} alt="" />
                </div>
                <p className="tit">{item.TITLE}</p>
              </a>
            </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default EzStoryIUi;