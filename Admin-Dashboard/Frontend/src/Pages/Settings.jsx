import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#0a0e11] py-8 px-1 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Settings</h1>
        <div className="bg-[#14171c]/80 rounded-2xl shadow-xl px-6 py-8 border border-white/5 backdrop-blur-md">

          {/* Profile Section */}
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-2xl font-bold text-white">
              JJ
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Joel Joy</div>
              <div className="text-gray-400 text-sm">joel@example.com</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-10"></div>

          {/* Password Section */}
          <div className="mb-10">
            <div className="font-semibold text-white mb-2">Update Password</div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <input
                type="password"
                placeholder="New Password"
                className="bg-[#181c22] rounded-lg px-4 py-2 text-white placeholder-gray-400 outline-none border border-white/5 focus:border-blue-600 transition"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-[#181c22] rounded-lg px-4 py-2 text-white placeholder-gray-400 outline-none border border-white/5 focus:border-blue-600 transition"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold mt-2 sm:mt-0">
                Update
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-10"></div>

          {/* Preferences */}
          <div>
            <div className="font-semibold text-white mb-4">Preferences</div>
            <div className="flex flex-col gap-4">
              {/* Notification Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-gray-200">Email Notifications</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-gray-200">Dark Mode</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked readOnly className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;
