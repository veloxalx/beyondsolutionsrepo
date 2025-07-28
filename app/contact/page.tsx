"use client";
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="w-full min-h-screen py-5 md:py-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden flex flex-col">
      <Navbar />
      <WhatsAppContact />
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-600/10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto bg-gray-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-12 border border-orange-500/40 shadow-2xl shadow-orange-500/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent mb-10 text-center tracking-tight drop-shadow-lg">
            Contact Us
          </h2>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-orange-400 font-bold text-2xl mb-4">
                Thank you for reaching out!
              </div>
              <div className="text-orange-200 text-lg">
                We'll get back to you soon.
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8 mb-24"
              autoComplete="off"
            >
              <div>
                <label
                  className="block text-orange-300 font-semibold mb-2 text-lg"
                  htmlFor="name"
                >
                  Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-800 text-white border border-orange-500/40 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-base shadow-sm hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  className="block text-orange-300 font-semibold mb-2 text-lg"
                  htmlFor="email"
                >
                  Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-800 text-white border border-orange-500/40 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-base shadow-sm hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  className="block text-orange-300 font-semibold mb-2 text-lg"
                  htmlFor="subject"
                >
                  Subject <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-800 text-white border border-orange-500/40 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-base shadow-sm hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  className="block text-orange-300 font-semibold mb-2 text-lg"
                  htmlFor="message"
                >
                  Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-800 text-white border border-orange-500/40 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-gray-400 text-base shadow-sm hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:scale-105 border border-orange-400/40 text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="flex-1" />
      <div style={{ marginTop: "40px" }}>
        <Footer />
      </div>
    </section>
  );
}