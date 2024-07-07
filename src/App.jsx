import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full w-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className='w-full h-[400px] bg-[blue]'>
          <div className={'sm:hidden'}>
            aaaaaaaaaaaaaaa <br />
            aaaaaaaaaaaaaaa <br />
            aaaaaaaaaaaaaaa <br />
            aaaaaaaaaaaaaaa <br />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
