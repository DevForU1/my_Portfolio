import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Contacts } from './components/Contacts/Contacts';
import './App.css';
import WebFont from 'webfontloader';
import { ProjectPage } from './components/ProjectPage/ProjectPage';

WebFont.load({
  google: {
    families: ["Heebo", "Roboto", 'sans-serif']
  }
});

export const App = (props) => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapperOuter"> 
        <div className="innerWrapper">
          <Header state={props.state.navigation} />
          <div className="content">
            <Routes>
              <Route path="" element={<Home state={props.state} />} />
              <Route path="/Homepage" element={<Home state={props.state} />} />
              <Route path="/About" element={<About state={props.state} />} />
              <Route path="/Projects" element={<ProjectPage state={props.state} />} />
              <Route path="/Contacts" element={<Contacts state={props.state} />} />
            </Routes>
          </div>
          <Footer state={props.state.navigation} />
        </div>
      </div>
      </div>
    </div>
  );
};
