import { Routes, Route, useLocation } from 'react-router-dom';
import routes from './router/routes';
import HeaderUi from './components/commonUi/HeaderUi';
import NavUi from './components/commonUi/NavUi';
import './assets/css/common.css';
import './assets/css/reset.css'
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [ location ])

  return (
    <div className="App">
      {location.pathname !== '/' && <HeaderUi />}
      <Routes>
        {routes.map((route) => <Route key={route.path} exact path={route.path} element={route.element}></Route>)}
      </Routes>
      {location.pathname !== '/' && <NavUi />}
    </div>
  );
}

export default App;
