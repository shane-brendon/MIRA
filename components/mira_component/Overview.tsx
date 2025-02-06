import React from "react"
import SavingSvg from "../icons/SavingSvg"
import { ChevronRight } from "lucide-react"
import { DonutPieChart } from "../piechart"
import Link from "next/link"

const Overview = async () => {
  return (
    <section className="">
      <div className="container">
        <h1 className="text-3xl text-gray-900 font-bold">Overview</h1>
        <div className="flex w-full justify-between pt-8 gap-3 flex-col md:flex-row md:gap-6 mb-5">
          <div className=" bg-gray-900 text-white py-6 px-6 rounded-sm w-full md:max-w-[338px]">
            <span className=" text-sm">Current Balance</span>
            <span className="block font-bold text-3xl pt-3">$4,836.00</span>
          </div>
          <div className=" bg-white text-gray-900 py-6 px-6 rounded-sm w-full md:max-w-[338px]">
            <span className=" text-sm">Monthly Income</span>
            <span className="block font-bold text-3xl pt-3">$4,836.00</span>
          </div>
          <div className=" bg-white text-gray-900 py-6 px-6 rounded-sm w-full md:max-w-[338px]">
            <span className=" text-sm">Expenses</span>
            <span className="block font-bold text-3xl pt-3">$4,836.00</span>
          </div>
        </div>

        <div className="flex gap-5 flex-col md:flex-row">
          <div className="md:w-3/5">
            {/* pots */}
            <div className="bg-white w-full p-8 rounded-md  mb-5">
              <div className="flex justify-between items-center mb-5">
                <span className="font-bold text-xl">pots</span>
                <Link
                  href={"/pots"}
                  className="text-gray-400 flex items-center"
                >
                  see Details <ChevronRight />
                </Link>
              </div>
              <div className="flex gap-6 items-center flex-col md:flex-row md:justify-center">
                <div className="flex items-center gap-4 bg-background py-5 pl-4 rounded-md w-full md:w-2/5">
                  <SavingSvg />
                  <div className="">
                    <span className="text-gray-500 mb-3 block">
                      Total Saved
                    </span>
                    <span className="block text-3xl font-bold">$850</span>
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <div className="flex flex-wrap pl-5 gap-y-5">
                    <div className="w-1/2 relative pl-4">
                      <div className=" w-1 h-full absolute left-0 top-0 bg-green-500 rounded-lg"></div>
                      <span className="text-xs text-gray-500">Saving</span>
                      <span className="block text-sm font-bold">$159</span>
                    </div>
                    <div className="w-1/2 relative pl-4">
                      <div className=" w-1 h-full absolute left-0 top-0 bg-cyan-500 rounded-lg"></div>

                      <span className="text-xs text-gray-500">Saving</span>
                      <span className="block text-sm font-bold">$159</span>
                    </div>

                    <div className="w-1/2 relative pl-4">
                      <div className=" w-1 h-full absolute left-0 top-0 bg-blue-950 rounded-lg"></div>

                      <span className="text-xs text-gray-500">Saving</span>
                      <span className="block text-sm font-bold">$159</span>
                    </div>
                    <div className="w-1/2 relative pl-4">
                      <div className=" w-1 h-full absolute left-0 top-0 bg-yellow-600 rounded-lg"></div>

                      <span className="text-xs text-gray-500">Saving</span>
                      <span className="block text-sm font-bold">$159</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* transaction */}
            <div className="bg-white w-full p-8 rounded-md">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl">Transactions</span>
                <Link
                  href={"/transaction"}
                  className="text-gray-400 flex items-center"
                >
                  see Details <ChevronRight />
                </Link>
              </div>
              <div className="flex justify-between items-center pb-5  mb-5 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
                    E
                  </div>
                  <div className="text-sm font-bold">Emma Richardson</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold mb-2 block text-lime-500">
                    +$75.50
                  </span>
                  <span className="block text-gray-500 text-xs">
                    19 Aug 2024
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center pb-5  mb-5 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
                    E
                  </div>
                  <div className="text-sm font-bold">Emma Richardson</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold mb-2 block">+$75.50</span>
                  <span className="block text-gray-500 text-xs">
                    19 Aug 2024
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center pb-5  mb-5 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
                    E
                  </div>
                  <div className="text-sm font-bold">Emma Richardson</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold mb-2 block">+$75.50</span>
                  <span className="block text-gray-500 text-xs">
                    19 Aug 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 ">
            <div className="mb-5 bg-white p-8 rounded-md">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">Budgets</span>
                <Link
                  href={"/budgets"}
                  className="text-gray-400 flex items-center"
                >
                  see Details <ChevronRight />
                </Link>
              </div>
              <DonutPieChart />
            </div>
            <div className="mb-5 bg-white p-8 rounded-md">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl">Recurring Bills</span>
                <Link
                  href={"/bills"}
                  className="text-gray-400 flex items-center"
                >
                  see Details <ChevronRight />
                </Link>
              </div>

              <div className="flex justify-between border-l-4 px-4 rounded-xl bg-background py-5 border-l-teal-950 mb-3">
                <span>Paid Bills</span>
                <span className="text-sm font-bold mb-2 block">$190</span>
              </div>
              <div className="flex justify-between border-l-4 px-4 rounded-xl bg-background py-5 border-l-teal-500 mb-3">
                <span>Paid Bills</span>
                <span className="text-sm font-bold mb-2 block">$190</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
