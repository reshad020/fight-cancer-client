import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';

import IntroSection from './Components/Home/IntroSection';
import MidSection from './Components/Home/MidSection';
import Footer from './Components/Footer/Footer';
import CancerJourney from './Components/Home/CancerJourney';
import Goal from './Components/Home/Goal';

function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path = "/">
              <IntroSection></IntroSection>
              <MidSection></MidSection>
              <CancerJourney></CancerJourney>
              <Goal></Goal>
          </Route>
        </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
