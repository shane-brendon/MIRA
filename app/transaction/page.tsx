import React from "react"

const Transaction = () => {
  return (
    <div className="container">
      <h1 className="text-3xl text-gray-900 font-bold mb-8">Transactions</h1>

      <div className="bg-white p-8 rounded-md">
        <div className="flex justify-between items-center pb-5  mb-5 border-b">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
              E
            </div>
            <div className="text-sm font-bold">Emma Richardson</div>
          </div>
          <div className="">
            <span>General</span>
          </div>
          <div className="">
            <span>19 Aug 2024</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold mb-2 block text-lime-500">
              +$75.50
            </span>
            <span className="block text-gray-500 text-xs">19 Aug 2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction
