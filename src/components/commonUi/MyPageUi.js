import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { SET_USERID, SET_ACCESSTOKEN, SET_RERESHTOKEN } from '../../store/actions'
// API
import { thisUserInfoApi } from '../../api/index';
// cookie
import { removeCookie } from '../../utils/cookies';

const NewUserUi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [thisUserInfoItem, setThisUserInfoItem] = useState({});
  const userImgUrl = useSelector(state => state.user.userImgUrl);

  useEffect(() => {
    thisUserInfoApi()
      .then((response) => {
        setThisUserInfoItem(response.data);
        console.log("마이페이지 성공!!!");
      })
      .catch(err => console.log("마이페이지 에러!!!"));
  }, []);

  const changeDayFunc = (value) => {
    let itemData = new Date(value);
    let itemMonth = itemData.getMonth();
    let itemDate = itemData.getDate();

    if(itemMonth < 10) {
      itemMonth = `0${itemMonth + 1}`
    }
    if(itemDate < 10) {
      itemDate = `0${itemDate}`
    }
    return `${itemMonth}월 ${itemDate}일`;
  }

  const annuaCalcuFunc = (value) => {
    return value - thisUserInfoItem.AV_USE_DAYS;
  }

  const logoutFunc = () => {
    if(window.confirm('로그아웃 하시겠습니까?')) {
      // 쿠키삭제
      removeCookie("RefreshToken");
      removeCookie("AccessToken");
      removeCookie("UserID");
  
      // store 삭제
      dispatch({type: SET_USERID, payload: ''})
      dispatch({type: SET_ACCESSTOKEN, payload: ''})
      dispatch({type: SET_RERESHTOKEN, payload: ''})
      
  
      // 로그인 페이지 이동
      navigate('/');
    }
  }

  return (
    <section className="mypage-sec sec">
      <div className="secTit-box">
        <h2 className="sec-tit">마이페이지</h2>
        <div class="img-box">
          <img src={`${userImgUrl}${thisUserInfoItem.AV_EMP_NO}`} alt="" />
        </div>
      </div>
      <div class="info-wrap">
      <dl>
        <dt>이름 / ID</dt>
        <dd>
          <span>{ thisUserInfoItem.NAME } </span>
          <span>{ thisUserInfoItem.AV_EMP_NO }</span>
        </dd>
      </dl>
      <dl>
        <dt>남은 연차</dt>
        <dd>{ annuaCalcuFunc(thisUserInfoItem.AV_DAYS) }</dd>
      </dl>
      <dl>
        <dt>근무 연수</dt>
        <dd>{ thisUserInfoItem.easyday }</dd>
      </dl>
      <dl>
        <dt>연차 갱신일</dt>
        <dd>{ changeDayFunc(thisUserInfoItem.AV_REGDATE) }</dd>
      </dl>
      </div>
      <button class="out-btn" onClick={logoutFunc}>logout</button>
    </section>
  )
}

export default NewUserUi;