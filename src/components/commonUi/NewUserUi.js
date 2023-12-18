import { useEffect, useState } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// Api
import { newUserApi } from '../../api/index';

const NewUserUi = () => {
  const [newUserItem, setNewUserItem] = useState([]);

  useEffect(() => {
    newUserApi()
      .then((response) => {
        setNewUserItem(response.data);
        console.log("신규 입사자 성공!!!");
      })
      .catch(err => console.log("신규 입사자 에러!!!"))
  }, []);

  return (
    <section className="newuser-sec sec">
      <h3 className="sec-tit">신규 입사자</h3>
      <Swiper
        className="newSwiper"
        slidesPerView={1.1}
        spaceBetween={10}
      >
        {
          newUserItem.map(item => {
            return (
              <SwiperSlide key={item.E_IDX}>
                <p class="name">{ item.NAME }</p>
                <p class="info">
                  <span>{ item.DEPT_NAME }</span> / 
                  <span>{ item.CALL_NAME }</span>
                </p>
                <p class="contact">
                  <span>M. { item.HP }</span> / 
                  <span>E. { item.EMAIL }</span>
                </p>
                <p class="addr"> (주)이지미디어 /08380 서울특별시 구로구 디지털로 31길 20(구로동, 에이스테크노타워 5차 701호) </p>
                <p class="phone">Tel 02.869.3434 / Fax 02.869.3437</p>
                <p class="url">www.easymedia.co.kr</p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default NewUserUi;