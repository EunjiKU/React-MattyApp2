import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateEmail } from '../../utils/validation';
import { loginApi } from '../../api/index';
import { SET_USERID, SET_ACCESSTOKEN, SET_RERESHTOKEN } from '../../store/actions';
import { setCookie } from '../../utils/cookies';
import "../../assets/css/form.css"

const LoginFormUi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputId = useRef();
  const inputPwd = useRef();

  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [isEmailChk, setIsEmailChk] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptyPwd, setIsEmptyPwd] = useState(false);
  const [isErrLogin, setIsErrLogin] = useState(false);

  // 아이디
  const onEmailHanlder = (e) => {
    setEmail(e.currentTarget.value);

    // 이메일 유효성 검사
    setIsEmailChk(validateEmail(e.currentTarget.value));
  }

  // 비밀번호
  const onPwdHanlder = (e) => {
    setPwd(e.currentTarget.value);
  console.log("d");
  }

  // 로그인 버튼 클릭
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      userid: Email,
      passwd: Pwd
    }

    loginApi(loginData)
      .then(response => {
        console.log("로그인 성공!!!");
        // 로그인 정보 store 저장
        dispatch({ type: SET_USERID, payload: loginData.userId});
        dispatch({ type: SET_ACCESSTOKEN, payload: response.data.AccessToken});
        dispatch({ type: SET_RERESHTOKEN, payload: response.data.RefreshToken});
        // 로그인 정보 cookie 저장
        setCookie("UserID", loginData.userid);
        setCookie("AccessToken", response.data.AccessToken);
        setCookie("RefreshToken", response.data.RefreshToken);
        // 메인 페이지로 이동
        navigate('/main')
      })
      .catch(err => {
        console.log("로그인 에러!!!");
        if(Email.trim() === '' || !isEmailChk) {
          setIsEmptyEmail(true);
          setIsEmptyPwd(false);
          setIsErrLogin(false);
          inputId.current.focus();
        } else if(Pwd.trim() === '') {
          setIsEmptyEmail(false);
          setIsEmptyPwd(true);
          setIsErrLogin(false);
          inputPwd.current.focus();
        } else {
          setIsEmptyEmail(false);
          setIsEmptyPwd(false);
          setIsErrLogin(true);
        }
      })

  }

  return (
    <div className="form-wrap">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="id-input input-box">
          <label htmlFor="userid">이메일</label>
          <input ref={inputId} id="userid" type="text" placeholder="이메일을 입력해주세요."
            onChange={onEmailHanlder}
          />
          {!isEmailChk && Email.length > 4 && <p className="posi error">올바른 이메일 형식으로 입력해주세요.</p>}
        </div>
        <div className="pwd-input input-box">
          <label htmlFor="userpw">비밀번호</label>
          <input ref={inputPwd} id="userpw" type="password" placeholder="비밀번호를 입력해주세요."
            onChange={onPwdHanlder}
          />
        </div>
        <button className="login-btn basic-btn">로그인</button>
      </form>
      {isEmptyEmail && <p className="error">이메일을 입력해주세요.</p>}
      {isEmptyPwd && <p className="error">비밀번호를 입력해주세요.</p>}
      {isErrLogin && <p className="error">로그인에 실패하였습니다.<br />이메일과 비밀번호를 확인해주세요.</p>}
    </div>
  )
}

export default LoginFormUi;