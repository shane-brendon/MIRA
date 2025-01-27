import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Ellipsis, Plus } from "lucide-react"
import React from "react"

const Pots = () => {
  return (
    <div className="container pb-5">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">Pots</h1>
        <Button>
          <Plus /> Add New Budget
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className=" bg-white p-8 rounded-md w-full">
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-4">
              <span className="block w-4 h-4 bg-cyan-900 rounded-3xl" />
              <div className="font-bold text-xl">Savings</div>
            </div>
            <button>
              <Ellipsis />
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500"> Total saved</span>
            <span className="font-bold text-3xl">$159.00</span>
          </div>
          <Progress value={33} />
          <div className="flex justify-between items-center mt-3 text-xs mb-10">
            <span className="font-bold text-gray-500">7.95%</span>
            <span className="text-gray-500">Target of $2,000</span>
          </div>
          <div className="flex gap-4">
            <Button className="w-full font-bold" variant={"offset"}>
              + Add Money
            </Button>
            <Button className="w-full font-bold" variant={"offset"}>
              Withdraw
            </Button>
          </div>
        </div>
        <div className=" bg-white p-8 rounded-md w-full">
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-4">
              <span className="block w-4 h-4 bg-cyan-900 rounded-3xl" />
              <div className="font-bold text-xl">Savings</div>
            </div>
            <button>
              <Ellipsis />
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500"> Total saved</span>
            <span className="font-bold text-3xl">$159.00</span>
          </div>
          <Progress value={33} />
          <div className="flex justify-between items-center mt-3 text-xs mb-10">
            <span className="font-bold text-gray-500">7.95%</span>
            <span className="text-gray-500">Target of $2,000</span>
          </div>
          <div className="flex gap-4">
            <Button className="w-full font-bold" variant={"offset"}>
              + Add Money
            </Button>
            <Button className="w-full font-bold" variant={"offset"}>
              Withdraw
            </Button>
          </div>
        </div>
        <div className=" bg-white p-8 rounded-md w-full">
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-4">
              <span className="block w-4 h-4 bg-cyan-900 rounded-3xl" />
              <div className="font-bold text-xl">Savings</div>
            </div>
            <button>
              <Ellipsis />
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500"> Total saved</span>
            <span className="font-bold text-3xl">$159.00</span>
          </div>
          <Progress value={33} />
          <div className="flex justify-between items-center mt-3 text-xs mb-10">
            <span className="font-bold text-gray-500">7.95%</span>
            <span className="text-gray-500">Target of $2,000</span>
          </div>
          <div className="flex gap-4">
            <Button className="w-full font-bold" variant={"offset"}>
              + Add Money
            </Button>
            <Button className="w-full font-bold" variant={"offset"}>
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pots
