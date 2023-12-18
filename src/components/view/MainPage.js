import EzDayUi from '../commonUi/EzDayUi';
import EzStoryIUi from '../commonUi/EzStoryIUi';
import NewUserUi from '../commonUi/NewUserUi';
import '../../assets/css/main.css';

const MainPage = () => {
  return (
    <div className='main-page'>
      <EzDayUi />
      <EzStoryIUi />
      <NewUserUi />
    </div>
  )
}

export default MainPage;