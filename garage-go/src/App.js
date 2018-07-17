import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import GuestPage from './Pages/GuestPage.js';
import MapPage from './Pages/MapPage.js';
import SignInPage from './Pages/SignInPage';
import About from './Pages/About.js';
import PostGarageSale from './Pages/PostGarageSale.js';



const App = () => (
  <Router>
    <div>
     
        <Route exact path="/" component={About} />
        <Route exact path="/GuestPage" component={GuestPage} />
        <Route exact path="/MapPage" component={MapPage} />
        <Route exact path="/SignInPage" component={SignInPage} />
        <Route exact path="/PostGarageSale" component={PostGarageSale} />
   


{/* the regular HTML would work too */}
        {/* <div>
            "hello"
        </div>
        <div>
            "hey"
        </div>
    </footer>
    </div> */}
   {/* EVERYTHING HERE WILL SHOW UP ON EVERYPAGE BECAUSE ITS APP.JS */}
        <Footer title="2018 Copyright" desc="Garage Sale Not Currently Taking Work Applications"/>
    </div>
  </Router>
);

export default App;















// class App extends Component {
//   render() {
//     return (
//       <div className="App">


//       {/* <RENDER ME HERE !!!!!! you have to render me /> */}
//       <Header/>
//       {/* deleted this header code because I now have header.js */}



//           {/* materialize card */}


//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>


//         <Footer/>
      

//       </div>
//     );

//   }
// }

// export default App;

































// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

// const App = () => (
//   <Router>
//     <div>
//       <Navbar />
//       <Wrapper>
//         <Route exact path="/" component={About} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/discover" component={Discover} />
//         <Route exact path="/search" component={Search} />
//       </Wrapper>
//       <Footer />
//     </div>
//   </Router>
// );

// export default App;
