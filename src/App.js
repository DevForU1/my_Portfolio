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
              <Route path="/Главная" element={<Home state={props.state} />} />
              <Route path="/Обо мне" element={<About state={props.state} />} />
              <Route path="/Проекты" element={<ProjectPage state={props.state} />} />
              <Route path="/Контакты" element={<Contacts state={props.state} />} />
            </Routes>
          </div>
          <Footer state={props.state.navigation} />
        </div>
      </div>
      </div>
    </div>
  );
};
