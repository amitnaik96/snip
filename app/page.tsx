import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

const Home = () => {
  return <div className="bg-grid">
    <Navbar /> 
    <Hero /> 
    <Footer /> 
  </div>
}

export default Home;