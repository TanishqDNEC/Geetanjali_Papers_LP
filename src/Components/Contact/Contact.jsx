import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
        

        const response = await fetch('https://script.google.com/macros/s/AKfycbwbYFPUDHDhh0WYIwfhBKrXm8nS_C1Orr49NN7DVbNuOOE2XXLpa7jbop9XVqKGmsR_/exec'
            , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
            
          });
          
  
      if (response.ok) {
        alert('Form submitted!');
        setFormData({ name: '', phone: '', city: '', email: '' });
      } else {
        alert('Submission failed. Check Google Script log.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Error submitting form.');
    }
  };
  
  
  
  
  

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-8">
        
        {/* Left: Company Info */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Reach out to Geetanjali Papers for high-quality and reliable printing services.
          </p>
          <ul className="text-gray-700 space-y-4">
            <li><strong>📍 Address:</strong>Lakhrao Bazarbiha, Opposite VKM, SHhivra, Rathyatra-221002 , Varanasi, UP</li>
            <li><strong>📞 Phone:</strong> +91-9918077806</li>
            <li>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:geetanjalipapers@email.com"
                className="text-blue-600 hover:underline"
              >
                geetanjalipapers@email.com
              </a>
            </li>
            {/* <li>
              <strong>📸 Instagram:</strong>{" "}
              <a
                href="https://instagram.com/geetanjalipapers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                @geetanjalipapers
              </a>
            </li> */}
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Send Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <button
              type="submit"
              className="w-full bg-slate-800 text-white font-semibold py-3 rounded-lg hover:bg-slate-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
