import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <div className="text-2xl font-bold tracking-wide">⚖️ LexPortal</div>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-900 transition font-medium"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-5 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 transition font-bold"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Justice Made <span className="text-yellow-400">Accessible</span>
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mb-10">
          LexPortal bridges the gap between citizens, legal professionals, and authorities —
          bringing transparency and clarity to the legal system.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-xl font-bold text-lg hover:bg-yellow-300 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 border-2 border-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition"
          >
            Login
          </button>
        </div>
      </div>

      {/* 3 Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-opacity-20 transition">
          <div className="text-5xl mb-4">🧑‍💼</div>
          <h2 className="text-2xl font-bold mb-3">General Public</h2>
          <p className="text-blue-200 mb-4">
            Understand your legal rights, search laws in simple language, and find legal aid near you.
          </p>
          <ul className="text-sm text-blue-100 space-y-1 text-left">
            <li>✅ Search & understand laws</li>
            <li>✅ Know your rights</li>
            <li>✅ AI legal chatbot</li>
            <li>✅ Find nearby lawyers</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-opacity-20 transition">
          <div className="text-5xl mb-4">👨‍⚖️</div>
          <h2 className="text-2xl font-bold mb-3">Lawyer / Law Student</h2>
          <p className="text-blue-200 mb-4">
            Research case histories, track criminal cases, and collaborate with peers.
          </p>
          <ul className="text-sm text-blue-100 space-y-1 text-left">
            <li>✅ Case history research</li>
            <li>✅ Track criminal cases</li>
            <li>✅ Document management</li>
            <li>✅ IPC section search</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-opacity-20 transition">
          <div className="text-5xl mb-4">🏛️</div>
          <h2 className="text-2xl font-bold mb-3">Judge / Authority</h2>
          <p className="text-blue-200 mb-4">
            Analyze crime data, track case backlogs, and get AI-powered legal insights.
          </p>
          <ul className="text-sm text-blue-100 space-y-1 text-left">
            <li>✅ Crime data analytics</li>
            <li>✅ Case backlog tracking</li>
            <li>✅ Regional crime maps</li>
            <li>✅ Export reports</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center text-blue-300 pb-6 text-sm">
        © 2026 LexPortal — Justice for Everyone
      </div>

    </div>
  );
}

export default Home;