import './App.css';
import FirstLesson from './Components/FirstLesson';
import SecondLesson from './Components/SecondLesson';
import { Hero, CustomerReviews , Footer,PopularProducts, Service,SpecialOffers,Subscribe,SuperQuality} from './Section/index'
import Nav from './Components/Nav.jsx'

function App() {
  return (
    <>
      <main className='relative'>
        <Nav />
        <section className='xl:pl-60'>
          <Hero/>
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Service />
        </section>
        <section className="padding">
          <SpecialOffers/>
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
      </main>
    </>
  );
}

export default App;
