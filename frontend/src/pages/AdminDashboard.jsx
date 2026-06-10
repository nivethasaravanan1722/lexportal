import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const stats = [
    { label: 'Total Users', value: '1,248', color: 'bg-blue-500' },
    { label: 'Lawyers', value: '342', color: 'bg-green-500' },
    { label: 'Law Students', value: '567', color: 'bg-indigo-500' },
    { label: 'Judges', value: '89', color: 'bg-purple-500' },
    { label: 'Public Users', value: '250', color: 'bg-yellow-500' },
    { label: 'Pending Approvals', value: '14', color: 'bg-red-500' },
  ];

  const users = [
    { name: 'Rajesh Kumar', role: 'Lawyer', email: 'rajesh@email.com', status: 'Active', joined: '2026-01-15' },
    { name: 'Priya Sharma', role: 'Law Student', email: 'priya@email.com', status: 'Active', joined: '2026-02-20' },
    { name: 'Hon. Anil Verma', role: 'Judge', email: 'anil@court.gov.in', status: 'Active', joined: '2026-01-10' },
    { name: 'Sunita Devi', role: 'Public', email: 'sunita@email.com', status: 'Suspended', joined: '2026-03-05' },
    { name: 'Mohan Das', role: 'Lawyer', email: 'mohan@email.com', status: 'Pending', joined: '2026-06-01' },
  ];

  const recentActivity = [
    { action: 'New lawyer registered', user: 'Adv. Ramesh Gupta', time: '2 mins ago' },
    { action: 'Case updated', user: 'Judge Verma', time: '15 mins ago' },
    { action: 'New law article added', user: 'Admin', time: '1 hour ago' },
    { action: 'User suspended', user: 'Sunita Devi', time: '3 hours ago' },
    { action: 'New judgment uploaded', user: 'Admin', time: '5 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">⚖️ LexPortal — Admin Panel</div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300 text-sm">🔧 Welcome, Admin</span>
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
        {['home', 'users', 'content', 'approvals', 'activity', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-2 text-sm font-medium capitalize whitespace-nowrap border-b-2 transition ${
              activeTab === tab
                ? 'border-gray-800 text-gray-800'
                : 'border-transparent text-gray-500 hover:text-gray-700'
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
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Dashboard 🔧</h2>
            <p className="text-gray-500 mb-6">Manage all users, content and portal activity</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {stats.map((s, i) => (
                <div key={i} className={`${s.color} text-white rounded-xl p-5`}>
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="text-sm mt-1 opacity-90">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <h3 className="text-lg font-semibold text-gray-700 mb-3">🕐 Recent Activity</h3>
            <div className="bg-white rounded-xl shadow divide-y">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4">
                  <div>
                    <p className="text-gray-800 font-medium text-sm">{a.action}</p>
                    <p className="text-gray-400 text-xs">{a.user}</p>
                  </div>
                  <span className="text-gray-400 text-xs">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* USERS */}
        {activeTab === 'users' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">👥 User Management</h2>
              <button className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-semibold">
                + Add User
              </button>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600 font-semibold">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Role</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((u, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{u.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          u.role === 'Lawyer' ? 'bg-green-100 text-green-600' :
                          u.role === 'Judge' ? 'bg-purple-100 text-purple-600' :
                          u.role === 'Law Student' ? 'bg-indigo-100 text-indigo-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>{u.role}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                          u.status === 'Active' ? 'bg-green-100 text-green-600' :
                          u.status === 'Suspended' ? 'bg-red-100 text-red-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>{u.status}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-xs hover:bg-blue-200">Edit</button>
                          <button className="px-3 py-1 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CONTENT */}
        {activeTab === 'content' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Content Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Laws & IPC Sections', count: 512, icon: '📜', action: 'Manage Laws' },
                { title: 'Court Judgments', count: 234, icon: '⚖️', action: 'Manage Judgments' },
                { title: 'Law Notes & Articles', count: 89, icon: '📝', action: 'Manage Articles' },
                { title: 'Research Papers', count: 45, icon: '🔬', action: 'Manage Papers' },
                { title: 'Legal Aid Centers', count: 67, icon: '📍', action: 'Manage Centers' },
                { title: 'Quiz Questions', count: 320, icon: '🎯', action: 'Manage Quizzes' },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{c.title}</h3>
                      <p className="text-gray-400 text-sm">{c.count} entries</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900">
                    {c.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPROVALS */}
        {activeTab === 'approvals' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Pending Approvals</h2>
            <div className="space-y-4">
              {[
                { name: 'Adv. Mohan Das', role: 'Lawyer', doc: 'Bar Council ID', submitted: '2026-06-05' },
                { name: 'Hon. Kavitha Rao', role: 'Judge', doc: 'Appointment Letter', submitted: '2026-06-04' },
                { name: 'Arjun Patel', role: 'Law Student', doc: 'College ID', submitted: '2026-06-03' },
              ].map((a, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{a.name}</h3>
                    <p className="text-gray-500 text-sm">{a.role} • Document: {a.doc} • {a.submitted}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 font-semibold">
                      Approve
                    </button>
                    <button className="px-4 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 font-semibold">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTIVITY */}
        {activeTab === 'activity' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Portal Activity Monitor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-700 mb-4">Daily Active Users</h3>
                <div className="flex items-end space-x-2 h-32">
                  {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gray-800 rounded-t" style={{ height: `${h}%` }} />
                      <span className="text-xs text-gray-400 mt-1">
                        {['M','T','W','T','F','S','S'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-gray-700 mb-4">Portal Usage by Role</h3>
                <div className="space-y-3">
                  {[
                    { role: 'Public Users', percent: 45, color: 'bg-blue-400' },
                    { role: 'Law Students', percent: 28, color: 'bg-indigo-400' },
                    { role: 'Lawyers', percent: 20, color: 'bg-green-400' },
                    { role: 'Judges', percent: 7, color: 'bg-purple-400' },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{r.role}</span>
                        <span className="font-semibold">{r.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`${r.color} h-2 rounded-full`} style={{ width: `${r.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow divide-y">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4">
                  <div>
                    <p className="text-gray-800 font-medium text-sm">{a.action}</p>
                    <p className="text-gray-400 text-xs">{a.user}</p>
                  </div>
                  <span className="text-gray-400 text-xs">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Portal Settings</h2>
            <div className="bg-white rounded-xl shadow p-6 space-y-5">
              {[
                { label: 'Portal Name', value: 'LexPortal', type: 'text' },
                { label: 'Admin Email', value: 'admin@lexportal.in', type: 'email' },
                { label: 'Support Contact', value: '+91 9876543210', type: 'text' },
              ].map((s, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{s.label}</label>
                  <input
                    type={s.type}
                    defaultValue={s.value}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="font-medium text-gray-800 text-sm">Maintenance Mode</p>
                  <p className="text-gray-400 text-xs">Temporarily disable public access</p>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full cursor-pointer" />
              </div>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-semibold">
                Save Settings
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminDashboard;