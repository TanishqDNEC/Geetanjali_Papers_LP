import DedicationSection from "../Dedicatedsection/DedicatedSection";

export default function Home() {
    return (
      <main className="text-white">
        {/* Parallax Welcome Section */}
        <section
          className="h-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1650&q=80')`,
          }}
        id ='home'>
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to Geetanjali Papers
          </h1>
          <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
            One stop Solution to all your printing needs !
          </p>
        </section>
  
        {/* Services Preview Section */}
        <section id="services"className="bg-slate-800 px-6 md:px-16 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Our Printing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Visiting Cards</h3>
              <p className="text-gray-300">We are specialists in  "visiting card" printing (paper/plastic/UV/texture)</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Premium Business Cards</h3>
              <p className="text-gray-300">We manufacture various range of premium cards like Velvet Card, PVC card, Matt Card, Gloss Card, Embossed Card etc.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Leaflets & Posters</h3>
              <p className="text-gray-300">We deliver premium quality pamphlet/poster, on premium quality paper.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">ATM pouchs</h3>
              <p className="text-gray-300">The atm pouch is the best alternate of Visiting Card, Printers can order atm pouches in very minimum quantity of 1000.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Garment Tags</h3>
              <p className="text-gray-300">Minimum Order quantity as low as 2000 tags only. Various size and quality options are available with premium and fast printing in minimal costs.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Hospital Files</h3>
              <p className="text-gray-300">Files used by Hospitals, Clinics and Doctors with various quality options are available.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Digital 12 x 18 printing</h3>
              <p className="text-gray-300">We deliver high end printing quality .</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Stationery Printing</h3>
              <p className="text-gray-300">We use a grade super fine paper for letter head and envelopes. And provide superior printing quality.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Visual Aid/Medicine Folders</h3>
              <p className="text-gray-300">We provide high quality visual aids both in bookforms and wiro binding.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Multicolored Invoice Book
              </h3>
              <p className="text-gray-300">Eye-catching packaging for every need.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">School catalogues and Brochure
              </h3>
              <p className="text-gray-300">With design as our core strength, we are committed to delivering high-quality school brochures, prospectuses, fee cards, progress reports, calendars, diaries, and other customized stationery tailored to your needs.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">Packing labels
              </h3>
              <p className="text-gray-300">Candy & confectionery packaging labels,Pharmaceutical and medical product labels,Custom labels for packaged food products</p>
                    </div>
          </div>
          
            </section>
            
        {/* Partnership Section */}
        <section className="bg-white px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Text Column */}
            <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
                Always Ready to Help
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mt-2">
                Printers & Advertisers
            </h3>
            
            {/* underline */}
            <div className="w-12 h-1 bg-gray-500 mt-4 mb-6"></div>

            <p className="text-lg leading-relaxed">
                Unity empowers us. We can work alone, but together we will win. Unity is strength, 
                where there is team work and collaborations, wonderful things can be achieved.
            </p>
            </div>

            {/* Image Column */}
            <div className="md:w-1/2">
            <img
                src="https://imgs.search.brave.com/nhTTaPFHBrlsDfHCApyzuV_mltuII3x4jO8_lXOmyls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/ODM4NTU1Ni9waG90/by9idXNpbmVzc21l/bi1oYW5kc2hha2Ut/aW4tdGhlLW9mZmlj/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9U0xDU1lLYXFf/Q2w0ZG5Uc25pWWRS/RFdVdmRNZ1BMNkJZ/R0Zja2xiTlpzVT0"
                alt="Businessmen shaking hands"
                className="rounded-xl shadow-xl"
            />
            </div>
        </div>
            </section>
            

        { /**Continued components */}

        <section className="w-full py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-10">
    <div className="flex flex-col md:flex-row text-white text-left">
      
      {/* Our Vision */}
      <div className="flex-1 bg-teal-500 p-8 rounded-l-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">OUR VISION</h2>
        <p className="mb-4">
          Our vision is to bring all printers Pan India to one platform and unite them to enhance the strength as union.
        </p>
        <p className="pb-4">
          In addition to this we also look forward to extend our services to Printers for their welfare and development.
        </p>
      </div>

      {/* Our Policies */}
      <div className="flex-1 bg-slate-800 p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">OUR POLICIES</h2>
        <p className="mb-4">
          To work as B2B and provide our Best in class services only to Printers & Advertising agencies at least margin and in fixed predefined timeframe.
        </p>
        <p className="pb-4">
          We never compromise with quality and quantity of the product. In other words our customers (Printer & Advertisers) get best value for money.
        </p>
      </div>

      {/* Our Mission */}
      <div className="flex-1 bg-red-500 p-8 rounded-r-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">OUR MISSION</h2>
        <p className="mb-4">
          To make India self dependent and leader in printer technology.
        </p>
        <p className="pb-4">
          To create innovative printing services & products to be available for Indian as well as International customers.
        </p>
      </div>
      
    </div>
  </div>
</section>


          <DedicationSection/>

      </main>
    );
  }
  