import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';

import IntroSection from './Components/Home/IntroSection';
import MidSection from './Components/Home/MidSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path = "/">
              <IntroSection></IntroSection>
              <MidSection></MidSection>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
