import { DonutPieChart } from "@/components/piechart"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight, Ellipsis, Plus } from "lucide-react"
import React from "react"

const Budget = () => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">Budget</h1>
        <Button>
          <Plus /> Add New Budget
        </Button>
      </div>
      <div className="flex gap-8">
        <div className="w-3/5 ">
          <div className="mb-5 bg-white p-8 rounded-md">
            <DonutPieChart />
          </div>
        </div>
        <div className=" w-full">
          <div className="mb-5 bg-white p-8 rounded-md">
            <div className="flex justify-between mb-5">
              <div className="flex items-center gap-4">
                <span className="block w-4 h-4 bg-cyan-900 rounded-3xl" />
                <div className="font-bold text-xl">Entertainment</div>
              </div>
              <button>
                <Ellipsis />
              </button>
            </div>
            <span className="text-gray-500 mb-4 inline-block">
              Maximum of $50.00
            </span>
            <Progress value={33} />
            <div className="flex mt-4">
              <div className="w-1/2 relative pl-4">
                <div className=" w-1 h-full absolute left-0 top-0 bg-cyan-500 rounded-lg" />
                <span className="text-xs text-gray-500">Spend</span>
                <span className="block text-sm font-bold">$159</span>
              </div>
              <div className="w-1/2 relative pl-4">
                <div className=" w-1 h-full absolute left-0 top-0 bg-green-500 rounded-lg" />
                <span className="text-xs text-gray-500">Remaining</span>
                <span className="block text-sm font-bold">$159</span>
              </div>
            </div>
            <div className="bg-background p-5 mt-5 rounded-md">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">Latest Spending</span>
                <span className="text-gray-400 flex items-center">
                  See All <ChevronRight />
                </span>
              </div>
              <Table className="mt-5">
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium px-0">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
                          E
                        </div>
                        <div className="text-sm font-bold">Emma Richardson</div>
                      </div>
                    </TableCell>
                    <TableCell> General</TableCell>
                    <TableCell>19 Aug 2024</TableCell>
                    <TableCell className="text-right text-gray-500 text-xs">
                      +$75.50
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budget
