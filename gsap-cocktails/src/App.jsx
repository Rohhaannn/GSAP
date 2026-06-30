import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className='text-3xl font-extrabold text-green-500'>
      App
    </div>
  )
}

export default App
