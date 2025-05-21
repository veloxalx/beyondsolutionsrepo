const SuperiorResults = () => {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F5A623]/20 to-[#FF4D00]/20 rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623]/20 to-[#FF4D00]/20 rounded-full blur-[150px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F5A623] to-white bg-clip-text text-transparent animate-gradient-flow">
              Superior Results for Elite Organizations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic solutions consistently deliver exceptional outcomes that transform businesses
          </p>
        </div>

        {/* Results metrics with enhanced styling */}
      </div>
    </section>
  )
}

export default SuperiorResults
