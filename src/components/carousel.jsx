import carouselImg1 from '../assets/carousel-image-1.png';
import carouselImg2 from '../assets/carousel-image-2.png';
import carouselImg3 from '../assets/carousel-image-3.png';

function Carousel() {
  return (
    <div className="max-w-full h-[34rem] overflow-hidden">
      <div className="relative">
        <svg width="567" height="591" viewBox="0 0 567 591" fill="none" xmlns="http://www.w3.org/2000/svg" className="carousel-color scale-[85%] absolute top-4 left-auto right-0 fill-emerald-400">
          <path fillRule="evenodd" clipRule="evenodd" d="M346.826 0.208894C419.936 -2.90369 494.961 28.8941 539.285 87.1187C579.904 140.475 564.735 212.724 559.498 279.578C554.86 338.792 544.869 395.059 511.322 444.074C468.245 507.013 423.09 589.373 346.826 590.31C270.419 591.249 235.15 499.157 178.239 448.165C114.928 391.437 2.03472 364.562 0.0281008 279.578C-1.97812 194.61 103.899 156.155 170.086 102.837C225.237 58.4086 276.069 3.22131 346.826 0.208894Z" fill="current" fillOpacity="0.75"/>
        </svg>
        <div className="carousel w-[300%] flex absolute top-0 left-0">
          <div className="w-full h-80 relative">
            <h1 className="my-4 text-5xl font-bold max-w-[29rem]">Temukan resep masakan <span className="text-emerald-400">sehat dan lezat</span></h1>
            <p className="font-normal text-2xl text-gray-600 max-w-[35rem]">Tersedia kategori makanan untuk sarapan, makan siang, dan makan malam</p>
            <img src={carouselImg1} alt="image" className="absolute top-8 left-auto right-0 scale-[85%]"/>
          </div>
          <div className="w-full h-80 relative">
            <h1 className="my-4 text-5xl font-bold max-w-[29rem]">Hitung kebutuhan asupan <span className="text-orange-400">harian Anda</span></h1>
            <p className="font-normal text-2xl text-gray-600 max-w-[35rem]">Membantu menghitung kalori harian Anda dan mencatat makanan yang dikonsumsi</p>
            <img src={carouselImg2} alt="image" className="absolute top-8 left-auto right-0 scale-[85%]"/>
          </div>
          <div className="w-full h-80 relative">
            <h1 className="my-4 text-5xl font-bold max-w-[29rem]">Analisa aktivitas olahraga Anda untuk <span className="text-blue-400">mencapai target</span></h1>
            <p className="font-normal text-2xl text-gray-600 max-w-[35rem]">Hitung kalori yang telah terbakar dari aktivitas yang Anda lakukan</p>
            <img src={carouselImg3} alt="image" className="absolute top-8 left-auto right-0 scale-[85%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;