import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LawStudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [quizAnswer, setQuizAnswer] = useState(null);

  const features = [
    { id: 'cases', icon: '📚', title: 'Case Study Library', desc: 'Browse landmark case studies' },
    { id: 'judgments', icon: '⚖️', title: 'Landmark Judgments', desc: 'Study important judgments' },
    { id: 'notes', icon: '📝', title: 'Law Notes & Articles', desc: 'Read curated legal articles' },
    { id: 'mock', icon: '🧪', title: 'Mock Case Analysis', desc: 'Practice case analysis' },
    { id: 'quiz', icon: '🎯', title: 'Legal Quiz', desc: 'Test your legal knowledge' },
    { id: 'research', icon: '🔬', title: 'Research Papers', desc: 'Access research repository' },
  ];

  const caseStudies = [
    { title: 'Kesavananda Bharati v. State of Kerala', year: '1973', topic: 'Constitutional Law', difficulty: 'Advanced' },
    { title: 'Maneka Gandhi v. Union of India', year: '1978', topic: 'Fundamental Rights', difficulty: 'Intermediate' },
    { title: 'Vishaka v. State of Rajasthan', year: '1997', topic: 'Sexual Harassment', difficulty: 'Intermediate' },
    { title: 'Olga Tellis v. Bombay Municipal Corp', year: '1985', topic: 'Right to Livelihood', difficulty: 'Beginner' },
  ];

  const quizQuestions = [
    {
      question: 'Which article of the Indian Constitution deals with Right to Equality?',
      options: ['Article 12', 'Article 14', 'Article 19', 'Article 21'],
      answer: 'Article 14'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-indigo-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">⚖️ LexPortal — Law Student Portal</div>
        <div className="flex items-center space-x-4">
          <span className="text-indigo-200 text-sm">🎓 Welcome, Student</span>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-1.5 bg-red-500 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-white shadow-sm px-8 flex space-x-6 border-b overflow-x-auto">
        {['home', 'cases', 'judgments', 'notes', 'mock', 'quiz', 'research'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-2 text-sm font-medium capitalize whitespace-nowrap border-b-2 transition ${
              activeTab === tab
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-indigo-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-8 py-6">

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Law Student Portal 🎓</h2>
            <p className="text-gray-500 mb-6">Your complete legal learning & research platform</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map(f => (
                <div
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-md hover:border-indigo-300 border-2 border-transparent transition"
                >
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASE STUDY LIBRARY */}
        {activeTab === 'cases' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Case Study Library</h2>
            <div className="space-y-4">
              {caseStudies.map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.topic} • {c.year}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      c.difficulty === 'Advanced' ? 'bg-red-100 text-red-600' :
                      c.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>{c.difficulty}</span>
                    <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                      Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LANDMARK JUDGMENTS */}
        {activeTab === 'judgments' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Landmark Judgments Database</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Right to Privacy', case: 'K.S. Puttaswamy v. UOI', year: '2017', impact: 'High' },
                { title: 'Triple Talaq', case: 'Shayara Bano v. UOI', year: '2017', impact: 'High' },
                { title: 'Section 377', case: 'Navtej Singh Johar v. UOI', year: '2018', impact: 'High' },
                { title: 'Sabarimala', case: 'Indian Young Lawyers Assoc.', year: '2018', impact: 'High' },
              ].map((j, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 border-l-4 border-indigo-500">
                  <h3 className="text-lg font-semibold text-gray-800">{j.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{j.case} ({j.year})</p>
                  <span className="mt-2 inline-block px-2 py-0.5 bg-indigo-100 text-indigo-600 text-xs rounded font-medium">
                    Impact: {j.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NOTES & ARTICLES */}
        {activeTab === 'notes' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Law Notes & Articles</h2>
            <div className="space-y-4">
              {[
                { title: 'Introduction to Indian Constitutional Law', category: 'Constitutional', readTime: '10 min' },
                { title: 'Understanding IPC Sections 300-400', category: 'Criminal Law', readTime: '15 min' },
                { title: 'Civil Procedure Code Simplified', category: 'Civil Law', readTime: '12 min' },
                { title: 'Evidence Act — Key Provisions', category: 'Evidence', readTime: '8 min' },
              ].map((n, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{n.title}</h3>
                    <p className="text-gray-500 text-sm">{n.category} • ⏱️ {n.readTime} read</p>
                  </div>
                  <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                    Read
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MOCK CASE ANALYSIS */}
        {activeTab === 'mock' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🧪 Mock Case Analysis</h2>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Practice Case #1</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-4 text-sm text-gray-700 leading-relaxed">
                <strong>Facts:</strong> Mr. A entered into an agreement with Mr. B for the sale of land worth ₹50 lakhs.
                Mr. B paid an advance of ₹10 lakhs. Later, Mr. A refused to complete the sale citing personal reasons.
                Mr. B wants to seek legal remedy.
              </div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Analysis:</label>
              <textarea
                rows={5}
                placeholder="Write your legal analysis here — identify the applicable laws, sections, and possible remedies..."
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
              <button className="mt-3 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">
                Submit Analysis
              </button>
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Legal Quiz</h2>
            <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
              <p className="text-sm text-gray-500 mb-1">Question 1 of 10</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {quizQuestions[0].question}
              </h3>
              <div className="space-y-3">
                {quizQuestions[0].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setQuizAnswer(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition font-medium ${
                      quizAnswer === opt
                        ? opt === quizQuestions[0].answer
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-indigo-400'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {quizAnswer && (
                <p className={`mt-4 font-semibold ${quizAnswer === quizQuestions[0].answer ? 'text-green-600' : 'text-red-600'}`}>
                  {quizAnswer === quizQuestions[0].answer ? '✅ Correct!' : `❌ Wrong! Correct answer: ${quizQuestions[0].answer}`}
                </p>
              )}
            </div>
          </div>
        )}

        {/* RESEARCH PAPERS */}
        {activeTab === 'research' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔬 Research Paper Repository</h2>
            <div className="space-y-4">
              {[
                { title: 'Impact of Digital Evidence in Criminal Trials', author: 'Dr. R. Sharma', year: '2023', pages: 24 },
                { title: 'Judicial Delays in India — Causes & Solutions', author: 'Prof. M. Iyer', year: '2023', pages: 38 },
                { title: 'Cyber Crime Laws in India — A Critical Analysis', author: 'Dr. S. Patel', year: '2024', pages: 31 },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                    <p className="text-gray-500 text-sm">{p.author} • {p.year} • {p.pages} pages</p>
                  </div>
                  <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default LawStudentDashboard;