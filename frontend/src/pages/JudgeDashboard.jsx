import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JudgeDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const features = [
    { id: 'cases', icon: '📋', title: 'Case Dashboard', desc: 'View and manage all cases' },
    { id: 'suggestions', icon: '💡', title: 'Judgment Suggestions', desc: 'AI-based similar judgments' },
    { id: 'history', icon: '🕵️', title: 'Criminal History', desc: 'Analyze criminal backgrounds' },
    { id: 'trends', icon: '📊', title: 'Crime Trends', desc: 'Visualize crime patterns' },
    { id: 'pending', icon: '⏳', title: 'Pending Cases', desc: 'Track case backlogs' },
    { id: 'evidence', icon: '🔍', title: 'Evidence Review', desc: 'Review submitted evidence' },
    { id: 'sentencing', icon: '⚖️', title: 'Sentencing Patterns', desc: 'Analyze sentencing trends' },
  ];

  const pendingCases = [
    { id: 'CRI/2024/001', title: 'State v. Rahul Kumar', type: 'Murder', days: 45, priority: 'High' },
    { id: 'CRI/2024/002', title: 'State v. Priya Sharma', type: 'Fraud', days: 30, priority: 'Medium' },
    { id: 'CRI/2024/003', title: 'State v. Amit Singh', type: 'Theft', days: 12, priority: 'Low' },
    { id: 'CRI/2024/004', title: 'State v. Sunita Devi', type: 'Domestic Violence', days: 60, priority: 'High' },
  ];

  const crimeStats = [
    { type: 'Murder', count: 24, change: '+2%' },
    { type: 'Theft', count: 156, change: '-8%' },
    { type: 'Fraud', count: 89, change: '+12%' },
    { type: 'Assault', count: 67, change: '-3%' },
    { type: 'Cyber Crime', count: 112, change: '+24%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-purple-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">⚖️ LexPortal — Judge Portal</div>
        <div className="flex items-center space-x-4">
          <span className="text-purple-200 text-sm">👨‍⚖️ Welcome, Your Honour</span>
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
        {['home', 'cases', 'suggestions', 'history', 'trends', 'pending', 'evidence', 'sentencing'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-2 text-sm font-medium capitalize whitespace-nowrap border-b-2 transition ${
              activeTab === tab
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-purple-500'
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
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Judge Portal 👨‍⚖️</h2>
            <p className="text-gray-500 mb-4">Data-driven judicial support system</p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Cases', value: '248', color: 'bg-blue-500' },
                { label: 'Pending', value: '134', color: 'bg-yellow-500' },
                { label: 'Disposed', value: '98', color: 'bg-green-500' },
                { label: 'High Priority', value: '16', color: 'bg-red-500' },
              ].map((s, i) => (
                <div key={i} className={`${s.color} text-white rounded-xl p-5 text-center`}>
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="text-sm mt-1 opacity-90">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map(f => (
                <div
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-md hover:border-purple-300 border-2 border-transparent transition"
                >
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASE DASHBOARD */}
        {activeTab === 'cases' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Case Dashboard</h2>
            <div className="space-y-4">
              {pendingCases.map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400 font-mono">{c.id}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-gray-500 text-sm">{c.type} • Pending {c.days} days</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      c.priority === 'High' ? 'bg-red-100 text-red-600' :
                      c.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>{c.priority}</span>
                    <button className="px-4 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JUDGMENT SUGGESTIONS */}
        {activeTab === 'suggestions' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Similar Judgment Suggestions</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-4">
              <textarea
                rows={3}
                placeholder="Enter case facts to get similar judgment suggestions..."
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
              <button className="mt-3 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
                Get Suggestions
              </button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'State v. Suresh Kumar', match: '96%', sentence: '7 years RI', court: 'Supreme Court' },
                { title: 'State v. Mahesh Yadav', match: '89%', sentence: '5 years RI', court: 'Delhi HC' },
                { title: 'State v. Ramesh Gupta', match: '82%', sentence: '10 years RI', court: 'Bombay HC' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.court} • Sentence: {s.sentence}</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                    {s.match} match
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CRIME TRENDS */}
        {activeTab === 'trends' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Crime Trend Visualization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-700 mb-4">Crime Statistics 2026</h3>
                <div className="space-y-3">
                  {crimeStats.map((c, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{c.type}</span>
                        <span className={`font-semibold ${c.change.startsWith('+') ? 'text-red-500' : 'text-green-500'}`}>
                          {c.count} ({c.change})
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${(c.count / 200) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-700 mb-4">Monthly Case Filing Trend</h3>
                <div className="flex items-end space-x-2 h-40">
                  {[35, 52, 41, 67, 48, 73, 58, 82, 61, 75, 69, 88].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-purple-400 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-xs text-gray-400 mt-1">
                        {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PENDING CASES */}
        {activeTab === 'pending' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⏳ Pending Case Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Under 30 Days', count: 45, color: 'border-green-500 text-green-600' },
                { label: '30–60 Days', count: 62, color: 'border-yellow-500 text-yellow-600' },
                { label: 'Over 60 Days', count: 27, color: 'border-red-500 text-red-600' },
              ].map((s, i) => (
                <div key={i} className={`bg-white rounded-xl shadow p-6 text-center border-t-4 ${s.color}`}>
                  <p className={`text-4xl font-bold ${s.color.split(' ')[1]}`}>{s.count}</p>
                  <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {pendingCases.map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">{c.title}</h3>
                    <p className="text-gray-400 text-sm">{c.type}</p>
                  </div>
                  <span className={`text-sm font-bold ${
                    c.days > 45 ? 'text-red-500' : c.days > 25 ? 'text-yellow-500' : 'text-green-500'
                  }`}>{c.days} days pending</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVIDENCE REVIEW */}
        {activeTab === 'evidence' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Evidence Review System</h2>
            <div className="space-y-4">
              {[
                { case: 'CRI/2024/001', evidence: 'CCTV Footage', type: 'Video', status: 'Reviewed', submittedBy: 'Prosecution' },
                { case: 'CRI/2024/001', evidence: 'Witness Statement', type: 'Document', status: 'Pending Review', submittedBy: 'Defense' },
                { case: 'CRI/2024/002', evidence: 'Forensic Report', type: 'PDF', status: 'Reviewed', submittedBy: 'Prosecution' },
              ].map((e, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400 font-mono">{e.case}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{e.evidence}</h3>
                    <p className="text-gray-500 text-sm">{e.type} • Submitted by {e.submittedBy}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    e.status === 'Reviewed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>{e.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SENTENCING PATTERNS */}
        {activeTab === 'sentencing' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Sentencing Pattern Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-700 mb-4">Average Sentences by Crime Type</h3>
                <div className="space-y-3">
                  {[
                    { crime: 'Murder (IPC 302)', avg: '14 years', max: 'Death' },
                    { crime: 'Rape (IPC 376)', avg: '12 years', max: 'Life' },
                    { crime: 'Robbery (IPC 392)', avg: '5 years', max: '10 years' },
                    { crime: 'Cheating (IPC 420)', avg: '2 years', max: '7 years' },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700 text-sm">{s.crime}</span>
                      <div className="text-right">
                        <span className="text-purple-600 font-semibold text-sm">{s.avg}</span>
                        <span className="text-gray-400 text-xs ml-2">max: {s.max}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-700 mb-4">Conviction vs Acquittal Rate</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Conviction Rate', percent: 68, color: 'bg-red-400' },
                    { label: 'Acquittal Rate', percent: 24, color: 'bg-green-400' },
                    { label: 'Pending / Other', percent: 8, color: 'bg-gray-300' },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{r.label}</span>
                        <span className="font-semibold">{r.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className={`${r.color} h-3 rounded-full`} style={{ width: `${r.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CRIMINAL HISTORY */}
        {activeTab === 'history' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🕵️ Criminal History Analysis</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Enter accused name or ID..."
                  className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold">
                  Search
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-gray-700 mb-3">Record — Rahul Kumar</h3>
              <div className="space-y-3">
                {[
                  { year: '2019', offense: 'IPC 379 — Theft', result: 'Convicted', sentence: '1 year' },
                  { year: '2022', offense: 'IPC 307 — Attempt to Murder', result: 'Acquitted', sentence: '—' },
                  { year: '2024', offense: 'IPC 302 — Murder', result: 'Under Trial', sentence: 'Pending' },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center border-b pb-3">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{r.offense}</p>
                      <p className="text-gray-400 text-xs">{r.year} • Sentence: {r.sentence}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      r.result === 'Convicted' ? 'bg-red-100 text-red-600' :
                      r.result === 'Acquitted' ? 'bg-green-100 text-green-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>{r.result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default JudgeDashboard;