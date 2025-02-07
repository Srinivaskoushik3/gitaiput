import React, { useState } from 'react';
import { Search, Heart, ChevronDown } from 'lucide-react';

function App() {
  const [isInstructorsOpen, setInstructorsOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-semibold">L</span>
              </div>
              <span className="font-bold text-xl">koushik</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-gray-600"
                  onClick={() => setInstructorsOpen(!isInstructorsOpen)}
                >
                  <span>Instructors</span>
                  <ChevronDown size={16} />
                </button>
                {isInstructorsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Featured</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Popular</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">New</a>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-gray-600"
                  onClick={() => setCategoriesOpen(!isCategoriesOpen)}
                >
                  <span>All Categories</span>
                  <ChevronDown size={16} />
                </button>
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Design</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Development</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Marketing</a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-gray-600">View Plans</a>
            </nav>

            {/* Search and Auth */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search size={20} />
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Login
              </button>
              <button className="px-4 py-2 border-2 border-black rounded-full hover:bg-gray-50">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000"
                alt="Woman with sunglasses"
                className="rounded-2xl w-full object-cover aspect-[4/5] grayscale"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <Heart className="text-red-500" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Join our community</p>
                    <p className="text-sm text-gray-500">500+ already joined</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2">
              <h1 className="text-6xl font-bold mb-8">
                Create your own
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400">
                  style
                </span>
              </h1>

              {/* Stats Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold">2.4K+</p>
                  <p className="text-gray-500">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1.8K+</p>
                  <p className="text-gray-500">Online Courses</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-gray-500">Mentors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-gray-500">Satisfaction</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 text-lg font-semibold">
                Sign up now
              </button>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&q=80&w=1000"
              alt="Workspace with keyboard"
              className="rounded-2xl w-full object-cover aspect-video"
            />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000"
              alt="Laptop workspace"
              className="rounded-2xl w-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;