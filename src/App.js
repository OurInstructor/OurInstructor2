import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Router >
           <Navbar />
           <AllRoutes /> 
           <Footer />
      </Router>
    </div>
  );
}

export default App;
