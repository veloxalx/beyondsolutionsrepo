"use client"
import Footer from "@/components/footer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatsAppContact from "@/components/whatsapp_contact";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can add your submit logic here (e.g., send to API or email)
    setSubmitted(true);
  }

  return (
   
    <section className="w-full py-10 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <Navbar />
      <WhatsAppContact />

      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-56 md:w-72 h-56 md:h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-56 md:w-72 h-56 md:h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-xl mx-auto bg-gray-900/80 backdrop-blur-xl rounded-3xl p-4 sm:p-8 border border-orange-500/20 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-6 sm:mb-8 text-center">
            Contact Us
          </h2>
          {submitted ? (
            <div className="text-center text-orange-400 font-semibold py-8">
              Thank you for reaching out! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-orange-300 font-medium mb-2" htmlFor="name">
                  Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-orange-500/30 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="Your Name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-orange-300 font-medium mb-2" htmlFor="email">
                  Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-orange-500/30 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-orange-300 font-medium mb-2" htmlFor="subject">
                  Subject <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-orange-500/30 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-orange-300 font-medium mb-2" htmlFor="message">
                  Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-orange-500/30 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:scale-105 border border-orange-400/30 text-base sm:text-lg"
              >
                Submit
              </button>
            </form>
          )}
         
        </div>
      </div>
    </section>
  );
}