import Navbar from "../components/Navbar";

export default function WebPortofolio() {
  return (
    <>
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}
      {/* HERO SECTION START */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">John Sung</span></h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Web & <span className="text-dark">Mobile Developer</span> </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">Belajar web programming itu mudah kan? <span className="text-dark font-bold">ngga</span></p>
              <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src="/images/burungretBgRemove.png" alt="burung" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* ABOUT SECTION START */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Yuk, Belajar Web Programming</h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari Berteman</h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh</p>
              <div className="flex items-center">
                {/* YOUTUBE */}
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                  <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
                {/* INSTAGRAM */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                  <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                </a>
                {/* LINKEDIN */}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                  <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                {/* TWITTER */}
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:border-primary hover:bg-primary hover:text-white">
                  <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION END */}

      {/* PORTFOLIO SECTION START */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
              <p className="font-medium text-base text-secondary md:text-lg">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
          </div>
          <div className="mx-auto w-full px-4 flex flex-wrap justify-center xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/images/portfolio/1.jpeg" alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Cashier App</h3>
              <p className="font-medium text-base text-secondary">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/images/portfolio/1.jpeg" alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Cashier App</h3>
              <p className="font-medium text-base text-secondary">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/images/portfolio/1.jpeg" alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Cashier App</h3>
              <p className="font-medium text-base text-secondary">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/images/portfolio/1.jpeg" alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Cashier App</h3>
              <p className="font-medium text-base text-secondary">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
          </div>
        </div>
      </section>
      {/* PORTFOLIO SECTION END */}

      {/* CLIENT SECTION START */}
      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerjasama</h2>
              <p className="font-medium text-base text-secondary md:text-lg">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a href="#home" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/clients/mcdonalds.svg" alt="mekdi" />
              </a>
              <a href="#home" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/clients/google.svg" alt="google" />
              </a>
              <a href="#home" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/clients/apple.svg" alt="apple" />
              </a>
              <a href="#home" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/clients/bmw.svg" alt="bmw" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CLIENT SECTION END */}

      {/* BLOG SECTION START */}
      <section id="blog" className="pt-36 pb-32 bg-slate-200">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
              <p className="font-medium text-base text-secondary md:text-lg">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img src="https://source.unsplash.com/360x200?programming" alt="" className="w-full" />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">Tips Belajar Programming</h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">sem et tortor consequat id porta nibh</p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">Baca selengkapnya...</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img src="https://source.unsplash.com/360x200?coffee" alt="" className="w-full" />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">Tips Belajar Programming</h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">Baca selengkapnya...</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img src="https://source.unsplash.com/360x200?computer" alt="" className="w-full" />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">Tips Belajar Programming</h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">aliquam sem  aksldk alsdkals lakojDLF aklsdaslk asldka alsdalsdo las et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">Baca selengkapnya...</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img src="https://source.unsplash.com/360x200?games" alt="" className="w-full" />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">Tips Belajar Programming</h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">Baca selengkapnya...</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img src="https://source.unsplash.com/360x200?work" alt="" className="w-full" />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">Tips Belajar Programming</h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh akssakd aksdka kasdka aksdk ask aksdkaskkka ksdaksdkaka asadasda</p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">Baca selengkapnya...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG SECTION END */}

      {/* CONTANCT SECTION START */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
              <p className="font-medium text-base text-secondary md:text-lg">auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh aliquam sem et tortor consequat id porta nibh</p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 mx-auto">
              <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
                <input type="text" id="name" className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
                <input type="text" id="email" className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base font-bold text-primary">Pesan</label>
                <textarea type="text" id="message" className="w-full h-32 bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
                </textarea>
              </div>
              <div className="w-full px-4">
                <button className="w-full text-base font-semibold text-white bg-primary py-3 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500">Hubungi Saya</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* CONTANCT SECTION END */}


      {/* FOOTER SECTION START */}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap lg:text-center">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">WPU</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>Jl. Tendean No. 193</p>
              <p>Bekasi</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="#home" className="inline-block text-base hover:text-primary">Programming</a>
                </li>
                <li>
                  <a href="#home" className="inline-block text-base hover:text-primary">Teknologi</a>
                </li>
                <li>
                  <a href="#home" className="inline-block text-base hover:text-primary">Gaya Hidup</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="#home" className="inline-block text-base hover:text-primary">Beranda</a>
                </li>
                <li>
                  <a href="#about" className="inline-block text-base hover:text-primary">Tentang Saya</a>
                </li>
                <li>
                  <a href="#portfolio" className="inline-block text-base hover:text-primary">Portfolio</a>
                </li>
                <li>
                  <a href="#clients" className="inline-block text-base hover:text-primary">Clients</a>
                </li>
                <li>
                  <a href="#blog" className="inline-block text-base hover:text-primary">Blog</a>
                </li>
                <li>
                  <a href="#contact" className="inline-block text-base hover:text-primary">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* YOUTUBE */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              {/* INSTAGRAM */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
              </a>
              {/* LINKEDIN */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* TWITTER */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg className="fill-current" width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" /></svg>
              </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">dibuat oleh <a href="#home" className="font-bold text-primary">John Sung</a> menggunakan <a href="https:tailwindcss.com" className="font-bold text-sky-500">TailwindCSS</a></p>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION END */}
    </>
  )
}