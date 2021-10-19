import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';

import IntroSection from './Components/Home/IntroSection';
import MidSection from './Components/Home/MidSection';
import Footer from './Components/Footer/Footer';
import CancerJourney from './Components/Home/CancerJourney';
import Goal from './Components/Home/Goal';
import Service from './Components/Service/Service';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import initAuthentication from './Components/Firebase/firebase.init';
import AuthProvider from './Context/AuthProvider';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details';



function App() {
  return (
    <div className="">
     <AuthProvider>

     <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path = "/">
              <IntroSection></IntroSection>
              <MidSection></MidSection>
              <CancerJourney></CancerJourney>
              <Goal></Goal>
          </Route>
          <Route  path = "/home">
              <IntroSection></IntroSection>
              <MidSection></MidSection>
              <CancerJourney></CancerJourney>
              <Goal></Goal>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/details">
            <Details></Details>
          </PrivateRoute>

          <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
          <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
