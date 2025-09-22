import { Suspense } from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Trees from './Components/Trees/Trees';

const App = () => {
  let plantsData = fetch(
    'https://openapi.programming-hero.com/api/plants'
  ).then(res => res.json());
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <section className="bg-[#f0fdf4] py-[56px] md:py-[72px] lg:py-[100px]">
        <div className="container mx-auto px-[3%] md:px-0">
          <h2 className="font-semibold text-[32px] text-[#1F2937] text-center mb-[26px] md:mb-[32px] lg:mb-[40px]">
            Choose Your Trees
          </h2>

          <Suspense fallback={<h3>Loading</h3>}>
            <Trees plantsData={plantsData}></Trees>
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default App;
