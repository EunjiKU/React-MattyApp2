import LoginFormUi from '../commonUi/LoginFormUi';
import mattyLogo from "../../assets/images/img-matty-logo.png";
import '../../assets/css/page.css';

const LoginPage = () => {
  return (
    <div className='login-page'>
      <h1 className="logo"><img src={mattyLogo} alt="matty" /></h1>
      <LoginFormUi />
    </div>
  )
}

export default LoginPage;