function Recipe() {
  document.title = 'GoFitLife | Recipe';

  return (
    <main className="mt-20 mx-[5.5%]">
      <div className="breadcrum">
        <a className="breadcrum2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <p className="breadcrum-text">Beranda</p>
        </a>
      </div>
      <div className="breadcrum2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
        </svg>
        <p className="breadcrum-text">Makanan</p>
      </div>
      <div className="search-box w-full flex justify-center">
        <input id="input-search" className="input-field" type="text" placeholder="Search food"/>
      </div>
      <div className="grid-container grid mt-1 w-full">
        <div className="card-container text-center flex w-full flex-wrap gap-1rem"></div>
      </div>

      <form className="filter padding-1rem br-.5rem border h-fit-content" id="form-filter">
        <h3>Menyaring berdasarkan kategori</h3>
        <div className="form-control ">
          <input type="radio" name="category" id="all" value="all" checked/>
            <label for="all">Semua</label>
        </div>
        <div className="form-control">
          <input type="radio" name="category" value="breakfast" id="breakfast/>
            <label for="breakfast">Sarapan</label>
        </div>
        <div className="form-control">
          <input type="radio" name="category" value="lunch" id="lunch">
            <label for="lunch">Makan Siang</label>
        </div>
        <div className="form-control">
          <input type="radio" name="category" value="dinner" id="dinner"/>
            <label for="dinner">Makan Malam</label>
        </div>
        <div className="form-control">
          <input type="radio" name="category" value="snack" id="snack"/>
            <label for="snack">Cemilan</label>
        </div>
        <button type="submit" className="btn w-256px h-400px pl-20px pr-20px pt-10px">Menerapkan</button>
      </form>
        
    </main >
  );
}
