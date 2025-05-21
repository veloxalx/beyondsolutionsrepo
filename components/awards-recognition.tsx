const AwardsRecognition = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading industry authorities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">{/* Award items with enhanced styling */}</div>
      </div>
    </section>
  )
}

export default AwardsRecognition
