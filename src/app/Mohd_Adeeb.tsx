"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const habitImages = [
  {
    id: 1,
    name: "Drink Water",
    image: "/api/placeholder/150/150",
    alt: "Water glass illustration",
    color: "from-green-500 to-green-700",
    desc: "Track your hydration"
  },
  {
    id: 2,
    name: "Exercise",
    image: "/api/placeholder/150/150",
    alt: "Exercise illustration",
    color: "from-green-400 to-green-600",
    desc: "30 mins workout"
  },
  {
    id: 3,
    name: "Read",
    image: "/api/placeholder/150/150",
    alt: "Book illustration",
    color: "from-green-600 to-green-800",
    desc: "15 mins reading"
  },
  {
    id: 4,
    name: "Meditate",
    image: "/api/placeholder/150/150",
    alt: "Meditation illustration",
    color: "from-green-300 to-green-500",
    desc: "10 mins mindfulness"
  },
  {
    id: 5,
    name: "Sleep Early",
    image: "/api/placeholder/150/150",
    alt: "Sleep illustration",
    color: "from-green-700 to-green-900",
    desc: "Before 10 PM"
  },
  {
    id: 6,
    name: "Stretch",
    image: "/api/placeholder/150/150",
    alt: "Stretching illustration",
    color: "from-green-500 to-green-700",
    desc: "5 mins stretching"
  },
];

const habitData = [
  {
    id: 1,
    name: "Drink Water",
    color: "from-green-500 to-green-700",
    lineColor: "#10B981", // green-500
    history: [
      { day: "Mon", progress: 70 },
      { day: "Tue", progress: 80 },
      { day: "Wed", progress: 60 },
      { day: "Thu", progress: 100 },
      { day: "Fri", progress: 90 },
      { day: "Sat", progress: 75 },
      { day: "Sun", progress: 85 },
    ]
  },
  {
    id: 2,
    name: "Exercise",
    color: "from-green-400 to-green-600",
    lineColor: "#34D399", // green-400
    history: [
      { day: "Mon", progress: 100 },
      { day: "Tue", progress: 0 },
      { day: "Wed", progress: 80 },
      { day: "Thu", progress: 60 },
      { day: "Fri", progress: 100 },
      { day: "Sat", progress: 40 },
      { day: "Sun", progress: 0 },
    ]
  },
  {
    id: 3,
    name: "Read",
    color: "from-green-600 to-green-800",
    lineColor: "#059669", // green-600
    history: [
      { day: "Mon", progress: 30 },
      { day: "Tue", progress: 60 },
      { day: "Wed", progress: 100 },
      { day: "Thu", progress: 100 },
      { day: "Fri", progress: 70 },
      { day: "Sat", progress: 80 },
      { day: "Sun", progress: 90 },
    ]
  },
  {
    id: 4,
    name: "Meditate",
    color: "from-green-300 to-green-500",
    lineColor: "#6EE7B7", // green-300
    history: [
      { day: "Mon", progress: 100 },
      { day: "Tue", progress: 100 },
      { day: "Wed", progress: 100 },
      { day: "Thu", progress: 80 },
      { day: "Fri", progress: 100 },
      { day: "Sat", progress: 100 },
      { day: "Sun", progress: 100 },
    ]
  },
  {
    id: 5,
    name: "Sleep Early",
    color: "from-green-700 to-green-900",
    lineColor: "#047857", // green-700
    history: [
      { day: "Mon", progress: 50 },
      { day: "Tue", progress: 70 },
      { day: "Wed", progress: 30 },
      { day: "Thu", progress: 40 },
      { day: "Fri", progress: 20 },
      { day: "Sat", progress: 90 },
      { day: "Sun", progress: 60 },
    ]
  },
  {
    id: 6,
    name: "Stretch",
    color: "from-green-500 to-green-700",
    lineColor: "#10B981", // green-500
    history: [
      { day: "Mon", progress: 80 },
      { day: "Tue", progress: 90 },
      { day: "Wed", progress: 70 },
      { day: "Thu", progress: 60 },
      { day: "Fri", progress: 80 },
      { day: "Sat", progress: 100 },
      { day: "Sun", progress: 90 },
    ]
  },
];

const habitAvatar = [
  {
    id: 1,
    name: "Meditation",
    desc: "Daily mindfulness practice",
    color: "from-green-500 to-emerald-700"
  },
  {
    id: 2,
    name: "Workout",
    desc: "30-minute exercise routine",
    color: "from-blue-500 to-indigo-700"
  },
  {
    id: 3,
    name: "Reading",
    desc: "20 pages per day",
    color: "from-purple-500 to-violet-700"
  },
  {
    id: 4,
    name: "Water Intake",
    desc: "8 glasses daily",
    color: "from-cyan-500 to-blue-700"
  },
  {
    id: 5,
    name: "Journaling",
    desc: "Record daily thoughts",
    color: "from-amber-500 to-orange-700"
  },
  {
    id: 6,
    name: "Sleep",
    desc: "8 hours of quality rest",
    color: "from-indigo-500 to-purple-700"
  }
];



const Page = () => {


  // Main App Component 
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
      const [showFeaturesDialog, setShowFeaturesDialog] = useState(false);
      const [showPricingDialog, setShowPricingDialog] = useState(false);
      const [showAboutUsDialog, setShowAboutUsDialog] = useState(false);
      const [showContactDialog, setShowContactDialog] = useState(false);
      const [showBlogDialog, setShowBlogDialog] = useState(false);
      

    React.useEffect(() => {
      const handleClickOutside = (event: any) => {
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
        <nav className="bg-black shadow-sm sticky top-0 z-30 p-4">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                  <div className="text-2xl font-extrabold">
                    <span className="text-green-500">Habit</span>
                    <span className="text-pink-500">Tracker</span>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <button className="text-white hover:text-green-400">Home</button>
                  <button 
                    onClick={() => setShowFeaturesDialog(true)}
                    className="text-white hover:text-green-400"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => setShowPricingDialog(true)}
                    className="text-white hover:text-green-400"
                  >
                    Pricing
                  </button>
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
                            <button 
                              onClick={() => {
                                setMoreInfoOpen(false);
                                setShowAboutUsDialog(true);
                              }}
                              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400"
                            >
                              About Us
                            </button>
                            <button 
                              onClick={() => {
                                setMoreInfoOpen(false);
                                setShowContactDialog(true);
                              }}
                              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400"
                            >
                              Contact
                            </button>
                            <button 
                              onClick={() => {
                                setMoreInfoOpen(false);
                                setShowBlogDialog(true);
                              }}
                              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400"
                            >
                              Blog
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="px-4 py-2 border border-green-500 rounded-md text-sm text-green-500 bg-transparent hover:bg-green-900"
                    variants={buttonVariants}
                    onClick={() => setShowLoginDialog(true)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 border border-transparent rounded-md text-sm text-black bg-green-500 hover:bg-green-600"
                    variants={buttonVariants}
                    onClick={() => setShowSignUpDialog(true)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
            </nav>
      

        {/* Hero Section*/}
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



            {/* Features Dialog */}
              <AnimatePresence>
                {showFeaturesDialog && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
                    <motion.div
                      className="bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full border border-green-500"
                      variants={dialogVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-semibold text-green-500">Features</h3>
                          <button
                            onClick={() => setShowFeaturesDialog(false)}
                            className="text-green-400 hover:text-green-500"
                          >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h4 className="text-xl font-medium text-green-400">Daily Habit Tracking</h4>
                            <p className="text-gray-300">
                              Track unlimited habits with customizable reminders to keep you on track. Mark your daily progress with a simple tap and watch your streaks grow.
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-xl font-medium text-green-400">Progress Visualization</h4>
                            <p className="text-gray-300">
                              View your progress through beautiful charts and graphs. See your daily, weekly, and monthly patterns to identify trends and improvement areas.
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-xl font-medium text-green-400">Streak Counter</h4>
                            <p className="text-gray-300">
                              Build motivation with our streak counter. Get rewarded for consistency and receive encouraging notifications for milestone achievements.
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-xl font-medium text-green-400">Custom Goals</h4>
                            <p className="text-gray-300">
                              Set personal goals with milestone celebrations. Whether it's drinking more water or reading daily, customize your targets and track your journey.
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-xl font-medium text-green-400">Journal Integration</h4>
                            <p className="text-gray-300">
                              Record your thoughts and reflections alongside your habits. Connect emotional well-being with your daily routines for more meaningful insights.
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-end">
                          <motion.button
                            onClick={() => setShowFeaturesDialog(false)}
                            className="px-5 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            Close
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
        
              {/* Pricing Dialog */}
              <AnimatePresence>
                {showPricingDialog && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
                    <motion.div
                      className="bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full border border-green-500"
                      variants={dialogVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-semibold text-green-500">Pricing Plans</h3>
                          <button
                            onClick={() => setShowPricingDialog(false)}
                            className="text-green-400 hover:text-green-500"
                          >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Free Plan */}
                          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 hover:border-green-500 transition-all duration-300">
                            <h4 className="text-xl font-semibold text-white mb-2">Free</h4>
                            <div className="text-3xl font-bold text-green-500 mb-4">$0<span className="text-sm text-gray-400">/month</span></div>
                            <ul className="space-y-2 mb-6">
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Track up to 3 habits
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Basic progress charts
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                7-day history
                              </li>
                            </ul>
                            <motion.button
                              className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              Get Started
                            </motion.button>
                          </div>
                          
                          {/* Premium Plan */}
                          <div className="border-2 border-green-500 rounded-lg p-6 bg-gray-800 transform scale-105 z-10 shadow-xl">
                            <div className="absolute -top-3 right-6 bg-green-500 text-black text-xs px-2 py-1 rounded-md font-medium">POPULAR</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Premium</h4>
                            <div className="text-3xl font-bold text-green-500 mb-4">$4.99<span className="text-sm text-gray-400">/month</span></div>
                            <ul className="space-y-2 mb-6">
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Unlimited habits
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Advanced analytics
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Full history access
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Custom reminders
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                No ads
                              </li>
                            </ul>
                            <motion.button
                              className="w-full py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              Start Free Trial
                            </motion.button>
                          </div>
                          
                          {/* Family Plan */}
                          <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 hover:border-green-500 transition-all duration-300">
                            <h4 className="text-xl font-semibold text-white mb-2">Family</h4>
                            <div className="text-3xl font-bold text-green-500 mb-4">$9.99<span className="text-sm text-gray-400">/month</span></div>
                            <ul className="space-y-2 mb-6">
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Up to 5 accounts
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                All premium features
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Family challenges
                              </li>
                              <li className="flex items-center text-gray-300">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Shared goals
                              </li>
                            </ul>
                            <motion.button
                              className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              Choose Plan
                            </motion.button>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-end">
                          <motion.button
                            onClick={() => setShowPricingDialog(false)}
                            className="px-5 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            Close
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
        
              {/* About Us Dialog */}
              <AnimatePresence>
                {showAboutUsDialog && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
                    <motion.div
                      className="bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full border border-green-500"
                      variants={dialogVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-semibold text-green-500">About Us</h3>
                          <button
                            onClick={() => setShowAboutUsDialog(false)}
                            className="text-green-400 hover:text-green-500"
                          >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
        
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="rounded-full bg-green-500/20 p-4 flex items-center justify-center">
                              <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div className="text-center md:text-left">
                              <h4 className="text-xl font-medium text-green-400 mb-2">Our Mission</h4>
                              <p className="text-gray-300">
                                At HabitTracker, we believe that small actions repeated daily lead to remarkable results. Our mission is to help you transform your life through the power of consistent habits.
                              </p>
                            </div>
                          </div>
        
                          <div className="bg-gray-800 rounded-lg p-4">
                            <h4 className="text-xl font-medium text-green-400 mb-2">Our Story</h4>
                            <p className="text-gray-300 mb-4">
                              Founded in 2023, HabitTracker began as a personal project to solve a simple problem: how to build better habits. What started as a simple tracking tool has grown into a comprehensive platform helping thousands of users achieve their goals.
                            </p>
                            <p className="text-gray-300">
                              Our team of developers, designers, and behavioral scientists work together to create a tool that makes habit formation easier, more effective, and even enjoyable.
                            </p>
                          </div>
        
                          <div>
                            <h4 className="text-xl font-medium text-green-400 mb-2">Our Values</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="p-3 border border-gray-700 rounded bg-gray-800/50">
                                <h5 className="font-medium text-white mb-1">Simplicity</h5>
                                <p className="text-gray-400 text-sm">We believe effective tools should be simple to use.</p>
                              </div>
                              <div className="p-3 border border-gray-700 rounded bg-gray-800/50">
                                <h5 className="font-medium text-white mb-1">Privacy</h5>
                                <p className="text-gray-400 text-sm">Your data is yours. We prioritize your privacy.</p>
                              </div>
                              <div className="p-3 border border-gray-700 rounded bg-gray-800/50">
                                <h5 className="font-medium text-white mb-1">Growth</h5>
                                <p className="text-gray-400 text-sm">We continuously improve our platform.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <motion.button
                            onClick={() => setShowAboutUsDialog(false)}
                            className="px-5 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            Close
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
        
              {/* Contact Dialog */}
              <AnimatePresence>
                {showContactDialog && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
                    <motion.div
                      className="bg-gray-900 rounded-lg shadow-xl max-w-md w-full border border-green-500"
                      variants={dialogVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-semibold text-green-500">Contact Us</h3>
                          <button
                            onClick={() => setShowContactDialog(false)}
                            className="text-green-400 hover:text-green-500"
                          >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-green-400">Name</label>
                            <input
                              type="text"
                              id="name"
                              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-green-400">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                              placeholder="you@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-green-400">Subject</label>
                            <select
                              id="subject"
                              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                            >
                              <option>General Inquiry</option>
                              <option>Technical Support</option>
                              <option>Account Issues</option>
                              <option>Feature Request</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-green-400">Message</label>
                            <textarea
                              id="message"
                              rows={4}
                              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
                              placeholder="Your message here..."
                            ></textarea>
                          </div>
                        </div>
        
                        <div className="mt-6 flex justify-end space-x-3">
                          <motion.button
                            onClick={() => setShowContactDialog(false)}
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
                            Send Message
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
        
          {/* Blog Dialog */}
        <AnimatePresence>
          {showBlogDialog && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
              <motion.div
                className="bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full border border-green-500"
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-semibold text-green-500">Our Blog</h3>
                    <button
                      onClick={() => setShowBlogDialog(false)}
                      className="text-green-400 hover:text-green-500"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Blog Post 1 */}
                    <div className="bg-gray-800 rounded-lg p-4 hover:border-green-500 hover:border transition-all duration-300">
                      <h4 className="text-xl font-medium text-green-400">Building Better Morning Routines</h4>
                      <p className="text-sm text-gray-400 mb-2">May 1, 2025 • 5 min read</p>
                      <p className="text-gray-300">
                        Discover how the first hour of your day can set the tone for everything that follows. Learn how to establish a morning routine that boosts productivity and wellbeing.
                      </p>
                      <div className="mt-3">
                        <a href="#" className="text-green-500 text-sm hover:underline">Read more →</a>
                      </div>
                    </div>
                    
                    {/* Blog Post 2 */}
                    <div className="bg-gray-800 rounded-lg p-4 hover:border-green-500 hover:border transition-all duration-300">
                      <h4 className="text-xl font-medium text-green-400">The Science of Habit Formation</h4>
                      <p className="text-sm text-gray-400 mb-2">April 20, 2025 • 8 min read</p>
                      <p className="text-gray-300">
                        Explore the neuroscience behind habit formation and discover strategies to make lasting changes in your behavior patterns.
                      </p>
                      <div className="mt-3">
                        <a href="#" className="text-green-500 text-sm hover:underline">Read more →</a>
                      </div>
                    </div>
                    
                    {/* Blog Post 3 */}
                    <div className="bg-gray-800 rounded-lg p-4 hover:border-green-500 hover:border transition-all duration-300">
                      <h4 className="text-xl font-medium text-green-400">5 Habits of Highly Successful People</h4>
                      <p className="text-sm text-gray-400 mb-2">April 10, 2025 • 6 min read</p>
                      <p className="text-gray-300">
                        What daily habits do the world's most successful people share? We've analyzed patterns from entrepreneurs, artists, and athletes to uncover their secrets.
                      </p>
                      <div className="mt-3">
                        <a href="#" className="text-green-500 text-sm hover:underline">Read more →</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <a href="#" className="text-green-500 hover:underline flex items-center">
                        <span>View all posts</span>
                        <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                    <motion.button
                      onClick={() => setShowBlogDialog(false)}
                      className="px-5 py-2 bg-green-600 text-black rounded-md hover:bg-green-500 font-medium"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Close
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

      </div>
    );
  }



  const HabitCheckIn = () => {
    const [progress, setProgress] = useState(Array(habitAvatar.length).fill(0));
    const [completed, setCompleted] = useState(Array(habitAvatar.length).fill(false));
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleProgress = (idx: number, value: number) => {
      const newProgress = [...progress];
      newProgress[idx] = value;
      setProgress(newProgress);

      const newCompleted = [...completed];
      newCompleted[idx] = value === 100;
      setCompleted(newCompleted);
    };

    // Card variants for hover animations
    const cardVariants = {
      initial: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      },
      hover: {
        scale: 1.05,
        boxShadow: "0px 20px 40px rgba(16,185,129,0.15)",
        y: -10
      },
      tap: {
        scale: 0.98,
        boxShadow: "0px 10px 20px rgba(16,185,129,0.1)",
        y: -5
      }
    };

    // Progress bar animation variants
    const progressVariants = {
      initial: { width: "0%" },
      animate: (value: number) => ({
        width: `${value}%`,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      })
    };

    // Confetti animation when task is completed
    const confettiVariants = {
      hidden: {
        opacity: 0,
        scale: 0
      },
      visible: {
        opacity: 1,
        scale: [0, 1.2, 1],
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      },
      exit: {
        opacity: 0,
        scale: 0,
        transition: {
          duration: 0.3
        }
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-400 mb-12 tracking-tight text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Track Your Journey
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-6">
            {habitAvatar.map((habit, idx: number) => (
              <motion.div
                key={habit.id}
                className="relative rounded-2xl overflow-hidden shadow-xl backdrop-filter"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={activeCard === idx ? "hover" : "initial"}
                onClick={() => setActiveCard(activeCard === idx ? null : idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${habit.color} opacity-50`}></div>
                <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-sm"></div>

                <div className="relative z-10 p-5 flex flex-col items-center h-full bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm border border-green-500 border-opacity-20 rounded-2xl">
                  <motion.div
                    className="mb-4 rounded-full overflow-hidden bg-black bg-opacity-50 p-2 border-2 border-green-400 border-opacity-70 backdrop-filter backdrop-blur-sm shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'men' : 'women'}/${idx + 1}.jpg`}
                      alt={`${habit.name} avatar`}
                      className="w-14 h-14 rounded-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: completed[idx] ? [0, -5, 0] : 0
                      }}
                      transition={{
                        repeat: completed[idx] ? Infinity : 0,
                        duration: 2
                      }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-green-400 mb-2"
                    animate={{
                      scale: completed[idx] ? [1, 1.05, 1] : 1
                    }}
                    transition={{
                      repeat: completed[idx] ? Infinity : 0,
                      duration: 2,
                      delay: 0.5
                    }}
                  >
                    {habit.name}
                  </motion.h3>

                  <p className="text-green-300 mb-5 text-center text-sm">{habit.desc}</p>

                  <div className="w-full mb-3 relative">
                    <div className="h-3 rounded-full bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm border border-green-500 border-opacity-20 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${habit.color}`}
                        custom={progress[idx]}
                        variants={progressVariants}
                        initial="initial"
                        animate="animate"
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-300 font-medium">Progress</span>
                      <motion.span
                        className="text-xs text-green-300 font-medium"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        {progress[idx]}%
                      </motion.span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={progress[idx]}
                    onChange={e => handleProgress(idx, Number(e.target.value))}
                    className="w-full accent-green-500 mb-2"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      height: '8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(16,185,129,0.3)'
                    }}
                  />

                  <AnimatePresence>
                    {completed[idx] && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-3"
                        variants={confettiVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-white opacity-10 rounded-full backdrop-filter backdrop-blur-md" />
                          <div className="text-white font-bold text-lg relative z-10 px-4 py-2 rounded-full bg-black bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30">
                            COMPLETED!
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips Section */}
          <motion.div
            className="mt-16 px-10 py-6 rounded-full bg-black bg-opacity-60 text-green-400 shadow-lg text-center text-lg max-w-2xl mx-auto backdrop-blur-sm border border-green-900"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(16,185,129,0.2)"
            }}
          >
            "Small daily improvements are the key to staggering long-term results."
          </motion.div>
        </div>
      </div>
    );
  };

  const HabitDropdownAndGraph = () => {
    const [selectedHabits, setSelectedHabits] = useState([1, 2]); // Default: first two habits
    const [combinedData, setCombinedData] = useState<Array<{ [key: string]: string | number }>>([]);

    useEffect(() => {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const combined = days.map(day => {
        const dataPoint: { [key: string]: string | number } = { day };

        selectedHabits.forEach(habitId => {
          const habit = habitData.find(h => h.id === habitId);
          if (habit) {
            const dayData = habit.history.find(d => d.day === day);
            dataPoint[habit.name] = dayData ? dayData.progress : 0;
          }
        });

        return dataPoint;
      });

      setCombinedData(combined);
    }, [selectedHabits]);

    // Handle checkbox changes
    const handleHabitToggle = (habitId: number) => {
      setSelectedHabits(prev => {
        if (prev.includes(habitId)) {
          return prev.filter(id => id !== habitId);
        } else {
          return [...prev, habitId];
        }
      });
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-400 mb-12 tracking-tight text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Progress Visualization
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Selector Panel */}
            <motion.div
              className="md:w-1/3 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-green-900"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">Select Habits to Display</h3>
              <div className="space-y-3">
                {habitData.map(habit => (
                  <div key={habit.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`habit-${habit.id}`}
                      checked={selectedHabits.includes(habit.id)}
                      onChange={() => handleHabitToggle(habit.id)}
                      className="mr-3 h-5 w-5 rounded border-gray-600 text-green-500 focus:ring-green-500 focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor={`habit-${habit.id}`}
                      className="text-green-300 flex items-center"
                    >
                      <span
                        className="inline-block w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: habit.lineColor }}
                      ></span>
                      {habit.name}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-green-900">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Weekly Stats</h4>
                <div className="space-y-2">
                  {selectedHabits.map(habitId => {

                    const habit = habitData.find(h => h.id === habitId);
                    if (!habit) return null;

                    // Calculate average progress
                    const avg = Math.round(
                      habit.history.reduce((sum, day) => sum + day.progress, 0) / 7
                    );

                    // Find best and worst days
                    const best = [...habit.history].sort((a, b) => b.progress - a.progress)[0];
                    const worst = [...habit.history].sort((a, b) => a.progress - b.progress)[0];

                    return (
                      <div key={habit.id} className="pb-2 border-b border-gray-800">
                        <div className="flex justify-between">
                          <span className="text-sm text-green-400">{habit.name}</span>
                          <span className="text-sm text-green-300">Avg: {avg}%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-500">Best: {best.day} ({best.progress}%)</span>
                          <span className="text-red-400">Worst: {worst.day} ({worst.progress}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Graph Panel */}
            <motion.div
              className="md:w-2/3 bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-green-900"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">Weekly Progress</h3>
              <div className="h-96">
                {selectedHabits.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={combinedData}
                      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                      <XAxis dataKey="day" stroke="#60A5FA" />
                      <YAxis stroke="#60A5FA" domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#111827',
                          borderColor: '#10B981',
                          color: '#D1FAE5',
                          borderRadius: '8px'
                        }}
                        labelStyle={{ color: '#10B981', fontWeight: 'bold' }}
                      />
                      <Legend />
                      {selectedHabits.map(habitId => {
                        const habit = habitData.find(h => h.id === habitId);
                        return habit ? (
                          <Line
                            key={habit.id}
                            type="monotone"
                            dataKey={habit.name}
                            stroke={habit.lineColor}
                            strokeWidth={3}
                            dot={{ r: 5, strokeWidth: 2 }}
                            activeDot={{ r: 8 }}
                          />
                        ) : null;
                      })}
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400 text-xl">Select habits to view the graph</p>
                  </div>
                )}
              </div>

              {/* Insights Panel */}
              <motion.div
                className="mt-6 bg-gray-900 bg-opacity-80 rounded-lg p-4 border border-green-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-lg font-semibold text-green-400 mb-2">Insights</h4>
                <div className="text-green-300 text-sm space-y-2">
                  {selectedHabits.length === 0 ? (
                    <p>Select habits to see insights</p>
                  ) : selectedHabits.length === 1 ? (
                    <>
                      <p>You're seeing great consistency with your {habitData.find(h => h.id === selectedHabits[0])?.name} habit!</p>
                      <p>Try to maintain your routine on weekends for better results.</p>
                    </>
                  ) : (
                    <>
                      <p>Comparing multiple habits helps identify patterns in your daily routines.</p>
                      <p>It looks like your consistency is strongest mid-week. Consider creating weekend reminders!</p>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Tips Section */}
          <motion.div
            className="mt-16 px-10 py-6 rounded-full bg-black bg-opacity-60 text-green-400 shadow-lg text-center text-lg max-w-2xl mx-auto backdrop-blur-sm border border-green-900"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(16,185,129,0.2)"
            }}
          >
            "Track your habits consistently to reveal powerful insights about your daily patterns."
          </motion.div>
        </div>
      </div>
    );
  };



  const StreakTracker = () => {
    const currentStreak = 21;
    const totalCompletions = 147;
    const bestStreak = 30;
    const thisWeekCompletions = 5;

    const daysCompleted = [
      true, true, true, false, true, true, true,
      true, true, true, true, false, true, true
    ];

    // Activity data for charts
    const activityData = daysCompleted.map((completed, index) => {

      const date = new Date();
      date.setDate(date.getDate() - (13 - index));
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        completed: completed ? (60 + Math.random() * 40) : 10,
        status: completed ? 'done' : 'missed'
      };
    });

    // Weekly summary data for chart
    const weeklyData = [
      { name: 'Week 1', completed: 6, total: 7 },
      { name: 'Week 2', completed: 5, total: 7 },
      { name: 'Week 3', completed: 7, total: 7 },
      { name: 'Current', completed: 5, total: 7 }
    ];

    // Calculate streak percentage for the visual meter
    const streakPercentage = (currentStreak / bestStreak) * 100;

    // State for check-in animation
    const [isCheckedIn, setIsCheckedIn] = useState(false);

    // User data with placeholder avatar
    const user = {
      name: "Alex Johnson",
      level: 4
    };

    // Determine which badge to show based on streak length
    const getBadge = () => {
      if (currentStreak >= 30) return '🏆';
      if (currentStreak >= 21) return '🔥';
      if (currentStreak >= 14) return '🔥';
      if (currentStreak >= 7) return '🔥';
      return '✨';
    };

    // Handle check-in
    const handleCheckIn = () => {
      setIsCheckedIn(true);
    };

    return (
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-green-400 rounded-lg overflow-hidden w-full mx-auto shadow-lg border border-green-700">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-green-800 bg-gray-900">
          <h2 className="text-2xl font-bold text-green-400">Streak Tracker</h2>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isCheckedIn
                ? 'bg-green-900 text-green-300 cursor-default'
                : 'bg-green-600 text-black hover:bg-green-500'
              }`}
            onClick={handleCheckIn}
            disabled={isCheckedIn}
          >
            {isCheckedIn ? 'Checked In ✓' : 'Check In Today'}
          </button>
        </div>

        <div className="p-6 bg-gray-950">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column - Current streak */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900 h-full rounded-lg shadow-lg p-6 border border-green-800 hover:border-green-600 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-green-400">Current Streak</h3>
                  <span className="text-2xl">{getBadge()}</span>
                </div>

                <div className="flex items-baseline mb-6">
                  <span className="text-6xl font-bold text-green-400 mr-2">{currentStreak}</span>
                  <span className="text-sm text-green-300">days</span>
                </div>

                {/* Streak Meter */}
                <div className="mb-6">
                  <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-green-500 h-full rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${streakPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-green-300 mt-2">
                    <span>0</span>
                    <span>Best: {bestStreak} days</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-green-900">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-green-300">Total Completions</span>
                    </div>
                    <span className="font-medium text-green-400">
                      {isCheckedIn ? totalCompletions + 1 : totalCompletions}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-green-900">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-green-300">This Week</span>
                    </div>
                    <span className="font-medium text-green-400">
                      {isCheckedIn ? `${thisWeekCompletions + 1}/7` : `${thisWeekCompletions}/7`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-green-300">Next Milestone</span>
                    </div>
                    <span className="font-medium text-green-400">
                      {isCheckedIn ? '8 days to 🏆' : '9 days to 🏆'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-2/3">
              {/* User profile section */}
              <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-green-800 mb-6 hover:border-green-600 transition-colors">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-green-300 text-xl font-bold border border-green-600 shadow-lg">
                      AJ
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-green-400">{user.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-300 mr-2">Level {user.level}</span>
                      <div className="bg-gray-800 h-1.5 w-24 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full transition-all duration-500 ease-in-out" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center px-3 py-1 bg-green-900 rounded-full">
                    <span className="text-xs font-medium text-green-300">Top 5%</span>
                  </div>
                </div>

                {/* Weekly activity chart */}
                <div>
                  <h3 className="text-sm font-medium text-green-400 mb-4">Weekly Progress</h3>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#10b981', fontSize: 12 }} />
                        <YAxis hide={true} domain={[0, 7]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#111827',
                            border: '1px solid #065f46',
                            borderRadius: '0.375rem',
                            padding: '0.5rem',
                            color: '#10b981'
                          }}
                          cursor={{ fill: 'rgba(6, 95, 70, 0.2)' }}
                        />
                        <Bar dataKey="completed" radius={[4, 4, 0, 0]}>
                          {weeklyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill="#10b981" />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Last 14 Days Activity */}
              <div className="bg-gray-900 rounded-lg  shadow-lg p-6 border border-green-800 hover:border-green-600 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-green-400">Last 14 Days</h3>
                  <span className="text-xs px-2 py-1 bg-green-900 text-green-300 rounded">
                    {isCheckedIn ? '13/14' : '12/14'} completed
                  </span>
                </div>

                <div className="mb-6 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activityData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#10b981', fontSize: 12 }}
                      />
                      <YAxis hide={true} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#111827',
                          border: '1px solid #065f46',
                          borderRadius: '0.375rem',
                          padding: '0.5rem',
                          color: '#10b981'
                        }}
                        formatter={(value: number) => [`${value.toFixed(0)} mins`, 'Duration']}
                        cursor={{ stroke: '#064e3b', strokeWidth: 1, strokeDasharray: '3 3' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={(props) => {
                          const { cx, cy, payload, index } = props;
                          const key = `${payload?.date || index}-${cx}-${cy}`;

                          return payload.status === 'done' ? (
                            <svg key={key} x={cx - 4} y={cy - 4} width="8" height="8" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="4" fill="#10b981" />
                            </svg>
                          ) : (
                            <svg key={key} x={cx - 4} y={cy - 4} width="8" height="8" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" fill="#111827" stroke="#ef4444" strokeWidth="1" />
                            </svg>
                          );
                        }}
                        activeDot={{ r: 6, fill: "#10b981", stroke: "#111827", strokeWidth: 2 }}
                      />

                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Daily Streaks */}
                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-3">Daily Streaks</h4>
                  <div className="flex flex-wrap gap-2">
                    {daysCompleted.map((completed, index) => {
                      const date = new Date();
                      date.setDate(date.getDate() - (13 - index));
                      const isToday = index === 13;

                      return (
                        <div
                          key={index}
                          className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${isToday ? 'bg-green-900 border border-green-600 shadow-lg' :
                              completed ? 'bg-gray-800 hover:bg-gray-700 transition-colors' : 'bg-gray-800/50'
                            }`}
                        >
                          <span className="text-xs font-medium text-green-300">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </span>
                          <span className="text-xs font-medium text-green-400">
                            {date.getDate()}
                          </span>
                          {completed && (
                            <svg className="h-3 w-3 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SignUpSection = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(1);
    const [activeDialog, setActiveDialog] = useState<string | null>(null);

    // Dialog component
    interface DialogProps {
      isOpen: boolean;
      onClose: () => void;
      title: string;
      message: string;
      buttonText?: string;
    }

    const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, message, buttonText = "OK" }) => {
      const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };

      const dialogVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
      };

      return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={onClose}
            >
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-green-500 max-w-md w-full mx-4"
                variants={dialogVariants}
                onClick={(e) => e.stopPropagation()}
              >
                <h4 className="text-xl font-bold text-green-500 mb-2">{title}</h4>
                <p className="text-white mb-6">{message}</p>
                <motion.button
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                >
                  {buttonText}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      );
    };


    // Dialog management
    const openDialog = (dialogId: string) => {
      setActiveDialog(dialogId);
    };

    const closeDialog = () => {
      setActiveDialog(null);
    };

    const handleNextStep = () => {
      if (name && email) {
        setStep(2);
      } else {
        openDialog('missingFields');
      }
    };

    const handleSubmit = () => {
      if (password) {
        openDialog('signupSuccess');
      } else {
        openDialog('missingPassword');
      }
    };

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1
        }
      }
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      }
    };

    const formVariants = {
      initial: { x: 300, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
      exit: { x: -300, opacity: 0, transition: { duration: 0.3 } }
    };

    return (
      <div className="w-full bg-black text-white py-16 border-t border-green-500">
        {/* Dialogs */}
        <Dialog
          isOpen={activeDialog === 'signupSuccess'}
          onClose={closeDialog}
          title="Welcome to HabitTracker!"
          message="Your account has been created successfully. You're ready to start building better habits today!"
          buttonText="Start Now"
        />

        <Dialog
          isOpen={activeDialog === 'missingFields'}
          onClose={closeDialog}
          title="Missing Information"
          message="Please provide both your name and email address to continue."
        />

        <Dialog
          isOpen={activeDialog === 'missingPassword'}
          onClose={closeDialog}
          title="Password Required"
          message="Please create a password to secure your account."
        />

        <Dialog
          isOpen={activeDialog === 'getStarted'}
          onClose={closeDialog}
          title="Let's Get Started!"
          message="Create your free HabitTracker account to begin your journey towards better habits and achieve your goals."
          buttonText="Create Account"
        />

        <Dialog
          isOpen={activeDialog === 'pricing'}
          onClose={closeDialog}
          title="HabitTracker Plans"
          message="HabitTracker offers a Free plan with essential features, and a Premium plan at $9.99/month or $79.99/year with advanced analytics, unlimited habit tracking, and priority support."
          buttonText="Explore Options"
        />

        <Dialog
          isOpen={activeDialog === 'login'}
          onClose={closeDialog}
          title="Welcome Back!"
          message="Enter your login details to access your HabitTracker account and continue your habit journey."
          buttonText="Go to Login"
        />

        <Dialog
          isOpen={activeDialog === 'terms'}
          onClose={closeDialog}
          title="Terms of Service"
          message="By using HabitTracker, you agree to our terms regarding account usage, data storage, and community guidelines. HabitTracker is provided 'as is' without warranties of any kind."
          buttonText="I Understand"
        />

        <Dialog
          isOpen={activeDialog === 'privacy'}
          onClose={closeDialog}
          title="Privacy Policy"
          message="HabitTracker collects minimal personal data to provide our service. We never sell your data to third parties and implement industry-standard security measures to protect your information."
          buttonText="Got It"
        />

        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >

          {/* Top Section with Headline and Value Props */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-6 text-green-500"
              variants={itemVariants}
            >
              Start Your Journey Today
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join thousands of users who have transformed their daily habits and achieved their goals with HabitTracker.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-green-500 text-4xl mb-3">🔥</div>
                <h3 className="text-xl font-bold mb-2">Track Daily Streaks</h3>
                <p>Build momentum with visual streak tracking and daily notifications.</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-green-500 text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold mb-2">Insightful Analytics</h3>
                <p>Visualize your progress with beautiful charts and weekly reports.</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-green-500 text-4xl mb-3">🏆</div>
                <h3 className="text-xl font-bold mb-2">Achieve Goals</h3>
                <p>Set milestones and celebrate your achievements along the way.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Sign Up Form Section */}
          <motion.div
            className="bg-gray-900 p-8 rounded-xl max-w-md mx-auto border border-green-500"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <h3 className="text-2xl font-bold text-center mb-6">Create Your Account</h3>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  className="space-y-4"
                  key="step1"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={formVariants}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleNextStep}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded transition-colors"
                  >
                    Continue
                  </motion.button>

                  <p className="text-center text-sm text-gray-400 mt-4">
                    Already have an account? <motion.a
                      onClick={() => openDialog('login')}
                      className="text-green-500 hover:underline cursor-pointer"
                      whileHover={{ color: "#4ADE80" }}
                    >
                      Log in
                    </motion.a>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  className="space-y-4"
                  key="step2"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={formVariants}
                >
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Create Password</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:outline-none"
                      placeholder="Create a secure password"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mr-2"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the <motion.a
                        onClick={() => openDialog('terms')}
                        className="text-green-500 hover:underline cursor-pointer"
                        whileHover={{ color: "#4ADE80" }}
                      >
                        Terms of Service
                      </motion.a> and <motion.a
                        onClick={() => openDialog('privacy')}
                        className="text-green-500 hover:underline cursor-pointer"
                        whileHover={{ color: "#4ADE80" }}
                      >
                        Privacy Policy
                      </motion.a>
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded transition-colors"
                  >
                    Create Your Account
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(1)}
                    className="w-full py-2 text-green-500 hover:text-green-400 text-sm"
                  >
                    ← Back to previous step
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            className="mt-16"
            variants={itemVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-center mb-8"
              variants={itemVariants}
            >
              What Our Users Say
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold"
                    whileHover={{ rotate: 10 }}
                  >
                    JD
                  </motion.div>
                  <div className="ml-3">
                    <p className="font-bold">John D.</p>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-300">"I've tried multiple habit trackers, but HabitTracker's streak system keeps me more motivated than anything else. 60 days and counting!"</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold"
                    whileHover={{ rotate: 10 }}
                  >
                    SM
                  </motion.div>
                  <div className="ml-3">
                    <p className="font-bold">Sarah M.</p>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-300">"The visual progress charts helped me identify patterns in my habits. Now I know exactly when I need extra motivation."</p>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold"
                    whileHover={{ rotate: 10 }}
                  >
                    RL
                  </motion.div>
                  <div className="ml-3">
                    <p className="font-bold">Robert L.</p>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-300">"Since using HabitTracker, I've maintained a daily meditation practice for over 3 months. The streak feature is addictive!"</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.h3
              className="text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Habits?
            </motion.h3>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openDialog('getStarted')}
              >
                Get Started Free
              </motion.button>
              <motion.button
                className="px-8 py-3 bg-transparent border border-green-500 text-green-500 hover:bg-green-900 font-bold rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openDialog('pricing')}
              >
                View Pricing
              </motion.button>
            </div>
            <motion.p
              className="mt-4 text-gray-400"
              variants={itemVariants}
            >
              No credit card required • Free 14-day trial
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    );
  };

const Footer = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" }
  ];
  
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )},
    { name: "Instagram", href: "https://instagram.com", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    )},
    { name: "GitHub", href: "https://github.com", icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )}
  ];

  return (
    <motion.footer 
      className="bg-black border-t border-green-500/20 text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <div className="text-green-500 font-bold text-2xl">Habit<span className="text-pink-500">Tracker</span></div>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Transform Your Habits, Track Your Progress. Build better habits through daily tracking, visualization, and accountability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-500"
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => setHovered(item.name)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-green-500 font-semibold">Navigation</h3>
              <ul className="space-y-2">
                {footerLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-green-500"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-green-500 font-semibold">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-green-500"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-green-500 font-semibold">Subscribe to our newsletter</h3>
            <p className="text-gray-400 text-sm">Get weekly updates on habit formation tips and product features.</p>
            <motion.form 
              className="sm:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-green-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>&copy; {currentYear} HabitTracker. All rights reserved.</p>
          <motion.div 
            className="mt-4 md:mt-0 flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="#" 
              className="hover:text-green-500"
              whileHover={{ scale: 1.05 }}
            >
              Download App
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-green-500"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-green-500"
              whileHover={{ scale: 1.05 }}
            >
              FAQ
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

  return (
    <div>
      <HabitTrackerApp />
      <HabitCheckIn />
      <HabitDropdownAndGraph />
      <StreakTracker />
      <SignUpSection />
      <Footer />
      {/* <Mohd/> */}
    </div>
  );
}

export default Page;



