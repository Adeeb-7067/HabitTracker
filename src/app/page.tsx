"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  // Main App Component - This is properly structured now
  const HabitTrackerApp = () => {
    const [showLearnMoreDialog, setShowLearnMoreDialog] = useState(false);
    const [showSignUpDialog, setShowSignUpDialog] = useState(false);
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const [moreInfoOpen, setMoreInfoOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event:any) => {
        if (moreInfoOpen && !event.target.closest('.dropdown-container')) {
          setMoreInfoOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [moreInfoOpen]);

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.5 }
      }
    };

    const buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.95 }
    };

    const dialogVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.3 }
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 }
      }
    };

    return (
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Navigation Bar */}
        <nav className="bg-black shadow-sm sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex items-center">
      <div className="text-xl md:text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
        Habit<span className="text-red-300">Tracker</span>
      </div>
    </div>
              <div className="hidden text-md md:flex items-center space-x-8">
                <a href="#" className="text-white hover:text-green-400">Home</a>
                <a href="#" className="text-white hover:text-green-400">Features</a>
                <a href="#" className="text-white hover:text-green-400">Pricing</a>
                <div className="relative dropdown-container">
                  <button 
                    onClick={() => setMoreInfoOpen(!moreInfoOpen)}
                    className="text-white hover:text-green-400 flex items-center"
                    aria-expanded={moreInfoOpen}
                    aria-haspopup="true"
                  >
                    More Info
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${moreInfoOpen ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {moreInfoOpen && (
                      <motion.div 
                        className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1 border border-green-500/30"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400">About Us</a>
                          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400">Contact</a>
                          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400">Blog</a>                         
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button 
                  onClick={() => setShowLoginDialog(true)}
                  className="px-4 py-2 border border-green-500 rounded-md text-sm text-green-500 bg-transparent hover:bg-green-900"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Login
                </motion.button>
                <motion.button 
                  onClick={() => setShowSignUpDialog(true)}
                  className="px-4 py-2 border border-transparent rounded-md text-sm text-black bg-green-500 hover:bg-green-600"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - Fixed to ensure full-size image cover */}
        <motion.div 
          className="relative text-white text-center py-20 px-4 overflow-hidden h-screen"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div 
            className="absolute inset-0 w-full h-full z-0" 
            style={{
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1675686410583-80617cf552d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Habits, Track Your Progress
            </motion.h1>
            <motion.p 
              className="text-lg max-w-2xl mx-auto mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to your personal habit tracker! Our app empowers you to monitor your daily habits, 
              set goals, and visualize your progress with insightful charts.
            </motion.p>
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="px-6 py-3 bg-transparent text-white border border-green-500 rounded-md hover:bg-green-900"
                onClick={() => setShowLearnMoreDialog(true)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
              </motion.button>
              <motion.button 
                className="px-6 py-3 bg-green-600 text-black rounded-md hover:bg-green-500"
                onClick={() => setShowSignUpDialog(true)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Learn More Dialog */}
        <AnimatePresence>
          {showLearnMoreDialog && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
              <motion.div 
                className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full border border-green-500"
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-green-500">About Habit Tracker</h3>
                    <button 
                      onClick={() => setShowLearnMoreDialog(false)}
                      className="text-green-400 hover:text-green-500"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Our habit tracking app helps you build positive routines and break negative patterns. 
                      Using proven behavior science techniques, we make habit formation easier and more effective.
                    </p>
                    <h4 className="font-medium text-green-400">Key Features:</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Daily habit tracking with customizable reminders</li>
                      <li>Visual progress charts and statistics</li>
                      <li>Streak counting to keep you motivated</li>
                      <li>Goal setting with milestone celebrations</li>
                      <li>Journal integration for reflection</li>
                    </ul>
                    <p className="text-gray-300">
                      Start your journey toward better habits and consistent progress today!
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <motion.button
                      onClick={() => setShowLearnMoreDialog(false)}
                      className="px-4 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Got it
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Sign Up Dialog */}
        <AnimatePresence>
          {showSignUpDialog && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
              <motion.div 
                className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full border border-green-500"
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-green-500">Create an Account</h3>
                    <button 
                      onClick={() => setShowSignUpDialog(false)}
                      className="text-green-400 hover:text-green-500"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-green-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-green-400">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-green-400">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <motion.button
                      onClick={() => setShowSignUpDialog(false)}
                      className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-gray-800"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Create Account
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
        {/* Login Dialog */}
        <AnimatePresence>
          {showLoginDialog && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
              <motion.div 
                className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full border border-green-500"
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-green-500">Login to Your Account</h3>
                    <button 
                      onClick={() => setShowLoginDialog(false)}
                      className="text-green-400 hover:text-green-500"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="loginEmail" className="block text-sm font-medium text-green-400">Email</label>
                      <input
                        type="email"
                        id="loginEmail"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="loginPassword" className="block text-sm font-medium text-green-400">Password</label>
                      <input
                        type="password"
                        id="loginPassword"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-600 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-green-500 hover:text-green-400">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <motion.button
                      onClick={() => setShowLoginDialog(false)}
                      className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-gray-800"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Log In
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Here you can add future components */}
      </div>
    );
  }

  return (
    <div>
      <HabitTrackerApp />
    </div>
  );
}

export default Page;