import LoginPage from '../components/view/LoginPage';
import MainPage from '../components/view/MainPage';
import BookPage from '../components/view/BookPage';
import ContactPage from '../components/view/ContactPage';
import MyPage from '../components/view/MyPage';
import UserPage from '../components/view/UserPage';

const routes = [
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/main",
    element: <MainPage/>
  },
  {
    path: "/book",
    element: <BookPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/my",
    element: <MyPage/>
  },
  {
    path: "/:id",
    element: <UserPage/>
  },
]

export default routes;