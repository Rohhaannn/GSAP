import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero/>
    </main>
  )
}

export default App
