import carouselImg1 from '../assets/carousel-image-1.webp';
import carouselImg2 from '../assets/carousel-image-2.webp';
import carouselImg3 from '../assets/carousel-image-3.webp';

function Carousel() {
  return (
    <section className="max-w-screen-xl pt-8 lg:gap-8 xl:gap-0 overflow-hidden">
      <div className="relative flex w-[300%]">
        <div className="carousel flex z-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 h-full">
            <div className="place-self-center text-center sm:max-w-screen-sm lg:text-start">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Temukan resep masakan <span className="text-emerald-400">sehat dan lezat</span></h1>
              <p className="font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Tersedia kategori makanan untuk sarapan, makan siang, dan makan malam</p>
            </div>
            
            <img src={carouselImg1} alt="image" className="hidden lg:block h-full aspect-[3/2] mt-auto mb-0"/>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="place-self-center text-center sm:max-w-screen-sm lg:text-start">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Hitung kebutuhan asupan <span className="text-orange-400">harian Anda</span></h1>
              <p className="font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Membantu menghitung kalori harian Anda dan mencatat makanan yang dikonsumsi</p>
            </div>
            
            <img src={carouselImg2} alt="image" className="hidden lg:block w-full aspect-[3/2] mt-auto mb-0"/>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="place-self-center text-center sm:max-w-screen-sm lg:text-start">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Analisa aktivitas olahraga Anda untuk <span className="text-blue-400">mencapai target</span></h1>
              <p className="font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Hitung kalori yang telah terbakar dari aktivitas yang Anda lakukan</p>
            </div>
            
            <img src={carouselImg3} alt="image" className="hidden lg:block w-full aspect-[3/2] mt-auto mb-0"/>
          </div>
        </div>
        <div className="absolute w-1/3 z-0">
          <svg viewBox="0 0 567 591" xmlns="http://www.w3.org/2000/svg" className="invisible lg:visible carousel-color w-1/2 aspect-[4/3] mr-0 ml-auto fill-emerald-400">
            <path fillRule="evenodd" clipRule="evenodd" d="M346.826 0.208894C419.936 -2.90369 494.961 28.8941 539.285 87.1187C579.904 140.475 564.735 212.724 559.498 279.578C554.86 338.792 544.869 395.059 511.322 444.074C468.245 507.013 423.09 589.373 346.826 590.31C270.419 591.249 235.15 499.157 178.239 448.165C114.928 391.437 2.03472 364.562 0.0281008 279.578C-1.97812 194.61 103.899 156.155 170.086 102.837C225.237 58.4086 276.069 3.22131 346.826 0.208894Z" fill="current" fillOpacity="0.75"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
