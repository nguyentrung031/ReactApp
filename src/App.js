import React from 'react';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
// import MainHome from './component/mainHome/MainHome';
// import MainProduct from './component/mainProduct/MainProduct';
// import MainDetall from './component/mainDetall/MainDetall';
import Accout from './component/account/Accout';
// import About from './component/about/About';
import RouterURL from './router/RouterURL';

function App() {
  return (
    <div>
      <Header></Header>
      <RouterURL></RouterURL>
      {/* Manin-Home */}
      {/* <MainHome></MainHome> */}
       {/* Manin-Home */}
        {/* Manin-Product */}
      {/* <MainProduct></MainProduct> */}
        {/* Manin-Product */}
        {/* Main-Detail */}
      {/* <MainDetall></MainDetall> */}
        {/* Main-Detail */}
        {/* About */}
      {/* <About></About> */}
         {/* About */}
      <Footer></Footer>
      <Accout></Accout>
    </div>
  );
}

export default App;
