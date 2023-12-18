import axios from 'axios';
import store from '../store/index'
import { dateCalculation } from '../utils/dateCalculation';

// 올해 1월1일, 이번달 시작일, 이번달 마지막일 구하기
let date = dateCalculation();
let allFirstDay = date[0];
let firstDay = date[1];
let lastDay = date[2];
let nowDay = date[3];

const instance = axios.create({
  baseURL: `https://mattyapi.easymedia.co.kr/`
})

instance.interceptors.request.use(function (config) {
    // 요청보내기 전 코드
    config.headers.token = store.getState().user.accessToken;
    return config;
  }, function (error) {
    // 요청에러 처리
    return Promise.reject(error);
  },
);

// 로그인 API
function loginApi(userData) {
  return instance.post('api/token', userData);
}

// 해당 로그인 유저 정보 API
function thisUserInfoApi() {
  return instance.get('api/Vacation');
}

// 부서 API
function contactApi(dept) {
  return instance.get('api/User', {
    params: {
      dept: dept
    }
  })
}

// 전체 유저 정보 API
function allUserApi() {
  return instance.get('api/User')
}


// 기념일 - 이지데이 API
function ezDayApi() {
  return instance.get('api/User', {
    params: {
      stype: "easyday",
      startdate: firstDay,
      enddate: lastDay
    }
  })
}

// 이지스토리 API
function ezStoryApi() {
  return instance.get('api/EasyStory');
}

// 신규 입사자 API
function newUserApi() {
  return instance.get('api/User', {
    params: {
      stype: 'new',
      startdate: allFirstDay,
      enddate: lastDay
    }
  })
}


// // 특정 유저 정보 API
// function thisUserApi(userId) {
//   return instance.post(`api/User/${userId}`)
// }

export {
  loginApi,
  thisUserInfoApi,
  contactApi,
  allUserApi,
  ezDayApi,
  ezStoryApi,
  newUserApi,
  // thisUserApi
}