import './App.css';
import './css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
