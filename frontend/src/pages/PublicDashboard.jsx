import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://lexportal.onrender.com';

function PublicDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [laws, setLaws] = useState([]);
  const [lawsLoading, setLawsLoading] = useState(false);
  const [caseSearch, setCaseSearch] = useState('');
  const [cases, setCases] = useState([]);
  const [casesLoading, setCasesLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hello! I am LexBot, your Indian legal assistant. Ask me anything about Indian law, your rights, or legal procedures!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  const features = [
    { id: 'search', icon: '🔍', title: 'Search Laws', desc: 'Search Indian laws & legal sections' },
    { id: 'judgments', icon: '📜', title: 'Court Judgments', desc: 'View public court judgments' },
    { id: 'rights', icon: '🛡️', title: 'Know Your Rights', desc: 'Understand your legal rights' },
    { id: 'cases', icon: '📁', title: 'Case Status', desc: 'Track criminal case status' },
    { id: 'chatbot', icon: '🤖', title: 'Legal Chatbot', desc: 'Get instant legal guidance' },
    { id: 'aid', icon: '📍', title: 'Legal Aid Centers', desc: 'Find nearby legal aid' },
  ];

  const recentJudgments = [
    { title: 'Right to Privacy Judgment', court: 'Supreme Court', date: '2024-08-24', type: 'Constitutional' },
    { title: 'Nirbhaya Case Verdict', court: 'Delhi High Court', date: '2024-03-12', type: 'Criminal' },
    { title: 'Property Rights Ruling', court: 'Bombay High Court', date: '2024-06-01', type: 'Civil' },
  ];

  const legalRights = [
    { title: 'Right to Silence', desc: 'You have the right to remain silent during police questioning.' },
    { title: 'Right to Bail', desc: 'You have the right to apply for bail in bailable offences.' },
    { title: 'Right to Legal Aid', desc: 'Every citizen has the right to free legal aid if unable to afford a lawyer.' },
    { title: 'Right Against Illegal Detention', desc: 'You cannot be held for more than 24 hours without a magistrate order.' },
  ];

  const searchLaws = async () => {
    setLawsLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/laws?search=${searchQuery}`);
      const data = await res.json();
      setLaws(data);
    } catch (err) {
      console.error(err);
    }
    setLawsLoading(false);
  };

  const searchCases = async () => {
    setCasesLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/cases?search=${caseSearch}`);
      const data = await res.json();
      setCases(data);
    } catch (err) {
      console.error(err);
    }
    setCasesLoading(false);
  };

  const sendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setChatLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: chatInput })
      });
      const data = await res.json();
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    }
    setChatLoading(false);
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-blue-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">⚖️ LexPortal — Public Portal</div>
        <div className="flex items-center space-x-4">
          <span className="text-blue-200 text-sm">👤 Welcome, {user.name || 'Citizen'}</span>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/login');
            }}
            className="px-4 py-1.5 bg-red-500 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-white shadow-sm px-8 flex space-x-6 border-b overflow-x-auto">
        {['home', 'search', 'judgments', 'rights', 'cases', 'chatbot', 'aid'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-2 text-sm font-medium capitalize border-b-2 transition ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
          >
            {tab === 'aid' ? 'Legal Aid' : tab === 'chatbot' ? '🤖 Chatbot' : tab}
          </button>
        ))}
      </div>

      <div className="px-8 py-6">

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to LexPortal 🏛️</h2>
            <p className="text-gray-500 mb-6">Your one-stop legal awareness platform</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map(f => (
                <div
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-md hover:border-blue-300 border-2 border-transparent transition"
                >
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEARCH LAWS TAB */}
        {activeTab === 'search' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Search Laws & Sections</h2>
            <div className="flex space-x-3 mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && searchLaws()}
                placeholder="Search by IPC section, keyword, or topic..."
                className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button onClick={searchLaws} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                Search
              </button>
            </div>
            {lawsLoading && <p className="text-gray-400 text-sm mb-4">Searching...</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {laws.map((law, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">{law.section}</span>
                    <span className="text-gray-400 text-xs">{law.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">{law.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{law.description}</p>
                  <p className="text-red-500 text-xs mt-2 font-medium">⚖️ {law.punishment}</p>
                </div>
              ))}
              {laws.length === 0 && !lawsLoading && (
                <div className="col-span-2 text-center py-12">
                  <p className="text-4xl mb-2">🔍</p>
                  <p className="text-gray-400">Search for laws above to see results</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* JUDGMENTS TAB */}
        {activeTab === 'judgments' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📜 Public Court Judgments</h2>
            <div className="space-y-4">
              {recentJudgments.map((j, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{j.title}</h3>
                    <p className="text-gray-500 text-sm">{j.court} • {j.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    j.type === 'Criminal' ? 'bg-red-100 text-red-600' :
                    j.type === 'Civil' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>{j.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RIGHTS TAB */}
        {activeTab === 'rights' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Know Your Legal Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {legalRights.map((r, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">✅ {r.title}</h3>
                  <p className="text-gray-500 text-sm">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASE STATUS TAB */}
        {activeTab === 'cases' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📁 Track Case Status</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={caseSearch}
                  onChange={e => setCaseSearch(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && searchCases()}
                  placeholder="Enter Case Number (e.g. CRI/2024/001)"
                  className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button onClick={searchCases} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">
                  Track
                </button>
              </div>
            </div>
            {casesLoading && <p className="text-gray-400 text-sm mb-4">Searching...</p>}
            <div className="space-y-4">
              {cases.map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400 font-mono">{c.case_number}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.court} • Next Hearing: {c.next_hearing || 'TBD'}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    c.status === 'Hearing' ? 'bg-yellow-100 text-yellow-600' :
                    c.status === 'Pending' ? 'bg-orange-100 text-orange-600' :
                    c.status === 'Closed' ? 'bg-green-100 text-green-600' :
                    'bg-gray-100 text-gray-500'
                  }`}>{c.status}</span>
                </div>
              ))}
              {cases.length === 0 && !casesLoading && (
                <div className="text-center py-12">
                  <p className="text-4xl mb-2">📁</p>
                  <p className="text-gray-400">Enter a case number to track status</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CHATBOT TAB */}
        {activeTab === 'chatbot' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🤖 Legal FAQ Chatbot</h2>
            <div className="bg-white rounded-xl shadow p-6">
              <div className="bg-gray-50 rounded-xl p-4 h-96 overflow-y-auto mb-4 space-y-3">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex items-start space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                      {msg.role === 'user' ? '👤' : '⚖️'}
                    </div>
                    <div className={`rounded-xl px-4 py-2 text-sm max-w-md ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-gray-700'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {chatLoading && (
                  <div className="flex items-start space-x-3">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm">⚖️</div>
                    <div className="bg-blue-50 rounded-xl px-4 py-2 text-sm text-gray-500">Thinking...</div>
                  </div>
                )}
              </div>
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask a legal question..."
                  className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={sendMessage}
                  disabled={chatLoading}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold disabled:opacity-50"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">⚠️ This chatbot provides general legal information, not legal advice.</p>
            </div>
          </div>
        )}

        {/* LEGAL AID TAB */}
        {activeTab === 'aid' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Nearby Legal Aid Centers</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Enter your city or pincode..."
                  className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">Find</button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'District Legal Services Authority', city: 'Chennai', phone: '044-25340001', free: true },
                { name: 'Tamil Nadu State Legal Aid', city: 'Chennai', phone: '044-28120002', free: true },
                { name: 'High Court Legal Aid Committee', city: 'Madras', phone: '044-25350003', free: true },
              ].map((a, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{a.name}</h3>
                    <p className="text-gray-500 text-sm">📍 {a.city} • 📞 {a.phone}</p>
                  </div>
                  {a.free && <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">FREE</span>}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PublicDashboard;