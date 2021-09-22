import NavBar from './Navbar';
import Hero from './Hero';
import Featured from './Featured';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default Home;