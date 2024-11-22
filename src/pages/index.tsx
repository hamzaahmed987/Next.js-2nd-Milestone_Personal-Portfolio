import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div>
   <Navbar />
    </div>

<div className="border-b-4 border-orange-300">
</div>

    <div className="flex justify-start ">
      <Hero />
    </div>

    {/* <div className='px-60 pt-36 sl:flex-wrap-reverse'>
    <p>Excited to meet you!👋</p>
</div> */}

<div>
   <About />
    </div>

<div>
  <Projects />
</div>


<div>
  <Contact />
</div>



<div>
  <Footer />
</div>












    </>
  );
}
