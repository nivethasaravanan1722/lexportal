import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LawyerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const features = [
    { id: 'search', icon: '🔍', title: 'Advanced Case Search', desc: 'Search cases by section, keyword, court' },
    { id: 'similar', icon: '🔗', title: 'Similar Cases', desc: 'Find similar case recommendations' },
    { id: 'clients', icon: '👥', title: 'Client Management', desc: 'Manage your client cases' },
    { id: 'judgments', icon: '⚖️', title: 'Judgment Analysis', desc: 'Analyze court judgments' },
    { id: 'documents', icon: '📂', title: 'Document Storage', desc: 'Store evidence & documents' },
    { id: 'history', icon: '🕵️', title: 'Criminal History', desc: 'Analyze criminal backgrounds' },
    { id: 'precedent', icon: '📖', title: 'Legal Precedents', desc: 'Find legal precedent cases' },
  ];

  const clients = [
    { name: 'Rajesh Kumar', case: 'Property Dispute', status: 'Active', nextDate: '2026-06-15' },
    { name: 'Priya Sharma', case: 'Divorce Proceedings', status: 'Active', nextDate: '2026-06-18' },
    { name: 'Anil Verma', case: 'Cheating IPC 420', status: 'Hearing', nextDate: '2026-06-20' },
    { name: 'Sunita Devi', case: 'Domestic Violence', status: 'Closed', nextDate: '—' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-green-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">⚖️ LexPortal — Lawyer Portal</div>
        <div className="flex items-center space-x-4">
          <span className="text-green-200 text-sm">👨‍💼 Welcome, Advocate</span>
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
        {['home', 'search', 'similar', 'clients', 'judgments', 'documents', 'history', 'precedent'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-2 text-sm font-medium capitalize whitespace-nowrap border-b-2 transition ${
              activeTab === tab
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-gray-500 hover:text-green-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-8 py-6">

        {/* HOME */}
        {activeTab === 'home' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Lawyer Portal 👨‍💼</h2>
            <p className="text-gray-500 mb-6">Your complete legal research & case management platform</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map(f => (
                <div
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-md hover:border-green-300 border-2 border-transparent transition"
                >
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADVANCED CASE SEARCH */}
        {activeTab === 'search' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Advanced Case Search</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input type="text" placeholder="Case keyword..." className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                <input type="text" placeholder="IPC Section (e.g. 302)..." className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
                  <option>All Courts</option>
                  <option>Supreme Court</option>
                  <option>High Court</option>
                  <option>Sessions Court</option>
                </select>
              </div>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                Search Cases
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'State v. Mohan Lal', court: 'Supreme Court', section: 'IPC 302', year: '2023', outcome: 'Convicted' },
                { title: 'Ram v. State of UP', court: 'Allahabad HC', section: 'IPC 307', year: '2023', outcome: 'Acquitted' },
                { title: 'State v. Deepak Singh', court: 'Sessions Court', section: 'IPC 420', year: '2024', outcome: 'Pending' },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.court} • {c.section} • {c.year}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    c.outcome === 'Convicted' ? 'bg-red-100 text-red-600' :
                    c.outcome === 'Acquitted' ? 'bg-green-100 text-green-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{c.outcome}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLIENT MANAGEMENT */}
        {activeTab === 'clients' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">👥 Client Case Management</h2>
            <div className="flex justify-end mb-4">
              <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                + Add New Client
              </button>
            </div>
            <div className="space-y-4">
              {clients.map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{c.name}</h3>
                    <p className="text-gray-500 text-sm">{c.case} • Next: {c.nextDate}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      c.status === 'Active' ? 'bg-blue-100 text-blue-600' :
                      c.status === 'Hearing' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-gray-100 text-gray-500'
                    }`}>{c.status}</span>
                    <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SIMILAR CASES */}
        {activeTab === 'similar' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Similar Case Recommendations</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-4">
              <textarea
                rows={3}
                placeholder="Describe your case facts to find similar cases..."
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
              <button className="mt-3 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                Find Similar Cases
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'State v. Arjun Prasad', similarity: '94%', court: 'Supreme Court', year: '2022' },
                { title: 'Ramesh v. State of Bihar', similarity: '87%', court: 'Patna HC', year: '2023' },
                { title: 'State v. Vikram Singh', similarity: '81%', court: 'Sessions Court', year: '2021' },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.court} • {c.year}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    {c.similarity} match
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTS */}
        {activeTab === 'documents' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📂 Evidence & Document Storage</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-6 border-2 border-dashed border-gray-300 text-center">
              <div className="text-4xl mb-2">📤</div>
              <p className="text-gray-500 text-sm">Drag & drop files here or</p>
              <button className="mt-2 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold">
                Browse Files
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'FIR_Copy_Rajesh.pdf', size: '245 KB', date: '2026-06-01', type: 'PDF' },
                { name: 'Evidence_Photo_1.jpg', size: '1.2 MB', date: '2026-06-02', type: 'Image' },
                { name: 'Witness_Statement.docx', size: '89 KB', date: '2026-06-03', type: 'Doc' },
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{f.name}</p>
                      <p className="text-gray-400 text-xs">{f.size} • {f.date}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    f.type === 'PDF' ? 'bg-red-100 text-red-600' :
                    f.type === 'Image' ? 'bg-blue-100 text-blue-600' :
                    'bg-indigo-100 text-indigo-600'
                  }`}>{f.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CRIMINAL HISTORY */}
        {activeTab === 'history' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🕵️ Criminal History Analysis</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Enter name or ID to search criminal history..."
                  className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                  Search
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-gray-700 mb-3">Sample Record — Mohan Das</h3>
              <div className="space-y-3">
                {[
                  { year: '2018', offense: 'IPC 379 — Theft', court: 'Sessions Court', result: 'Convicted' },
                  { year: '2021', offense: 'IPC 420 — Cheating', court: 'Magistrate Court', result: 'Acquitted' },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center border-b pb-3">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{r.offense}</p>
                      <p className="text-gray-400 text-xs">{r.court} • {r.year}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      r.result === 'Convicted' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                    }`}>{r.result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LEGAL PRECEDENTS */}
        {activeTab === 'precedent' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Legal Precedent Finder</h2>
            <div className="flex space-x-3 mb-6">
              <input
                type="text"
                placeholder="Search by topic, section, or keyword..."
                className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-semibold">
                Find
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Bachan Singh v. State of Punjab', principle: 'Death penalty — rarest of rare doctrine', year: '1980' },
                { title: 'D.K. Basu v. State of West Bengal', principle: 'Guidelines for arrest and detention', year: '1997' },
                { title: 'Arnesh Kumar v. State of Bihar', principle: 'Arrest guidelines for IPC 498A', year: '2014' },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-gray-800">{p.title} ({p.year})</h3>
                  <p className="text-gray-500 text-sm mt-1">⚖️ {p.principle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JUDGMENT ANALYSIS */}
        {activeTab === 'judgments' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Judgment Analysis</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-4 border-2 border-dashed border-gray-300 text-center">
              <div className="text-4xl mb-2">📤</div>
              <p className="text-gray-500 text-sm">Upload a judgment PDF to analyze</p>
              <button className="mt-2 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold">
                Upload Judgment
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'State v. Ramesh — Analysis', sections: 'IPC 302, 34', summary: 'Conviction upheld. Joint liability established.', date: '2026-05-10' },
                { title: 'Priya v. State — Analysis', sections: 'IPC 498A', summary: 'Acquittal due to lack of evidence.', date: '2026-05-18' },
              ].map((j, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 border-l-4 border-green-500">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">{j.title}</h3>
                    <span className="text-gray-400 text-xs">{j.date}</span>
                  </div>
                  <p className="text-xs text-green-600 font-medium mt-1">{j.sections}</p>
                  <p className="text-gray-500 text-sm mt-1">{j.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default LawyerDashboard;