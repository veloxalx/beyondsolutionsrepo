import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Clock, CheckCircle } from 'lucide-react'

const WhatsAppContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isOnline, setIsOnline] = useState(true)

  // Your WhatsApp number (replace with actual number)
  const whatsappNumber = "1234567890" // Format: country code + number without + or spaces
  
  // Pre-defined message (optional)
  const defaultMessage = "Hello! I'm interested in your elite business transformation services. Could you please provide more information?"

  // Simulate online/offline status (you can replace this with real logic)
  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours()
      setIsOnline(hour >= 9 && hour <= 18) // Online between 9 AM - 6 PM
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  // Handle scroll to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 3) // Hide after scrolling 3 screen heights
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Chat Widget */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                  className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-4"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-400/20"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <MessageCircle className="w-6 h-6 text-white" />
                          </div>
                          <motion.div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              isOnline ? 'bg-green-400' : 'bg-gray-400'
                            }`}
                            animate={{ scale: isOnline ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Elite Business Solutions</h3>
                          <div className="flex items-center gap-2 text-sm text-green-100">
                            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-300' : 'bg-gray-300'}`}></div>
                            <span>{isOnline ? 'Online' : 'Offline'}</span>
                            {!isOnline && (
                              <span className="text-xs">• Typically replies within 24h</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <X className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 bg-gray-50">
                    <div className="space-y-4">
                      {/* Welcome Message */}
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 text-sm leading-relaxed">
                              👋 <strong>Welcome!</strong> Ready to transform your business with our elite strategic solutions?
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              Click below to start a conversation on WhatsApp
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-xl border border-gray-100 text-center">
                          <Clock className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                          <p className="text-xs font-semibold text-gray-700">Response Time</p>
                          <p className="text-xs text-gray-500">&lt; 1 Hour</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-gray-100 text-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                          <p className="text-xs font-semibold text-gray-700">Success Rate</p>
                          <p className="text-xs text-gray-500">98%</p>
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleWhatsAppClick}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/10"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative z-10 flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <span>Continue on WhatsApp</span>
                        </div>
                      </motion.button>

                      {/* Privacy Note */}
                      <p className="text-xs text-gray-400 text-center leading-relaxed">
                        🔒 Your privacy is protected. We'll only use your number to respond to your inquiry.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className="relative"
            >
              {/* Pulsing Ring Effect */}
              <motion.div
                className="absolute inset-0 bg-green-500/30 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-green-500/20 rounded-full"
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Notification Badge */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center z-10 shadow-lg"
                  >
                    <motion.span
                      className="text-white text-xs font-bold"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      1
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group relative overflow-hidden border-4 border-white"
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Icon */}
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-8 h-8 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="whatsapp"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Floating Label */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: 1 }}
                    className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl whitespace-nowrap"
                  >
                    💬 Need help? Chat with us!
                    <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WhatsAppContact