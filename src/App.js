import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import WhyGradstoc from './components/WhyGradstoc';
import StudyMaterials from './components/StudyMaterials';
import BePrepared from './components/BePrepared';
import PopularSubjects from './components/PopularSubjects';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhyGradstoc />
      <StudyMaterials />
      <BePrepared />
      <PopularSubjects />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
