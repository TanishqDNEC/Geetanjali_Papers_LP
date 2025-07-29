import React from "react";

export default function About() {
  return (
    <main className="bg-white text-gray-800 px-4 sm:px-6 md:px-16 py-12 sm:py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">
          About Geetanjali Papers
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Trusted name in printing with over 25+ years of excellence.
        </p>
      </section>

      {/* Owner Section */}
      <section className="mb-16">
        <div className="bg-slate-100 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-800">Owner</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            <strong>Rajesh Gangwani</strong>, the visionary behind Geetanjali Papers, brings over <strong>25 years</strong> of hands-on experience in the printing industry. He has worked with numerous clients across India and is known for his precision, quality, and integrity.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Sheat college of engineering", "The Aryan International School", "Care Hospital"].map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 border hover:shadow-xl transition"
            >
              <h3 className="text-base sm:text-lg font-semibold">{client}</h3>
              <p className="text-sm text-gray-500">Trusted Partner</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">Location</h2>
        <p className="text-gray-700 text-base sm:text-lg">
          📍 <strong>Varanasi, Uttar Pradesh</strong>
        </p>
        <p className="text-gray-500 text-sm sm:text-base">Shop-6 chaudhary chambers ,Rathyatra Gurubagh road, Varanasi-221010</p>
      </section>

      {/* Quotes Section */}
      <section className="text-center mt-20">
        <blockquote className="italic text-lg sm:text-xl font-medium text-gray-800 mb-6">
          "Success in business comes not from luck, but from relentless effort, sleepless nights, and the courage to keep going when others quit."
        </blockquote>
        <blockquote className="italic text-sm sm:text-lg text-gray-600">
          “Quality means doing it right when no one is looking.” – Henry Ford
        </blockquote>
      </section>
    </main>
  );
}
