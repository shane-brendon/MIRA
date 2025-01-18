import React from "react"

const Overview = async () => {
  return (
    <section className="">
      <div className="container">
        <h1 className="text-3xl text-gray-900 font-bold">Overview</h1>
        <div className="flex w-full justify-between pt-8 gap-3 flex-col md:flex-row md:gap-6">
          <div className=" bg-gray-900 text-white py-6 px-6 rounded-sm w-full max-w-[338px]">
            <span className=" text-sm">Current Balance</span>
            <span className="block font-bold text-3xl pt-3">$4,836.00</span>
          </div>
          <div className=" bg-white text-gray-900 py-6 px-6 rounded-sm w-full max-w-[338px]">
            <span className=" text-sm">Current Balance</span>
            <span className="block font-bold text-3xl pt-3">$4,836.00</span>
          </div>
          <div className=" bg-white text-gray-900 py-6 px-6 rounded-sm w-full max-w-[338px]">
            <span className=" text-sm">Current Balance</span>
            <span className="block font-bold text-3xl pt-3">$4,836.00</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
