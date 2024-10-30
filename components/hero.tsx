



export default function Hero() {
  return (
    <>
      <div
        id="up"
        className=" bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
      >
        <div className="h-screen bg-opacity-50  flex items-center justify-center bg-[url('../../public/mainBg.svg')] ">
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">Fast-Track Your Finances</span> 
            </h1>
            <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Personal loans made 
            simple Online!
            </h2>
            <div className="inline-flex">
              <button className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
                View Your Rates
              </button>
              <a href="#about">
                <button className="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
