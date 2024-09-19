import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden' >
      <Header/>
      <Banner/>
      <NavBar/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

export default App;
