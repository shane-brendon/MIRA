import { AddDialog } from "@/components/dialog_budget_controller"
import { BudgetsDropdown } from "@/components/dropdownMenu"
import { DonutPieChart } from "@/components/piechart"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ChevronRight, Ellipsis, Plus } from "lucide-react"
import React from "react"

import { createClient } from "@/utils/supabase/server"
const Budgets = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("budget").select("*")
  console.log(data)
  if (error) {
    console.error("Error fetching budgets:", error.message)
    return null
  }

  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">Budget</h1>
        <AddDialog text={"Add New Budget"} />
      </div>
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-3/5 ">
          <div className="mb-5 bg-white p-8 rounded-md">
            <DonutPieChart />
          </div>
        </div>
        <div className=" w-full">
          {data.map((item, index) => (
            <BudgetItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Budgets

function BudgetItem({ data }: any) {
  const themes = [
    { name: "Green", color: "#277C78" },
    { name: "Yellow", color: "#F2CDAC" },
    { name: "Cyan", color: "#82C9D7" },
    { name: "Navy", color: "#626070" },
    { name: "Red", color: "#C94736" },
    { name: "Purple", color: "#826CB0" },
  ]
  const color = themes.find((element) => element.name === data.theme)?.color;
  return (
    <div className="mb-5 bg-white p-8 rounded-md">
      <div className="flex justify-between mb-5">
        <div className="flex items-center gap-4">
          <span className={`block w-4 h-4 bg-[${color}] rounded-3xl`} />
          <div className="font-bold text-xl">{data.title}</div>
        </div>
        <BudgetsDropdown id={data.id} />
      </div>
      <span className="text-gray-500 mb-4 inline-block">
        Maximum of RS {data.total}
      </span>
      <Progress value={33} />
      <div className="flex mt-4">
        <div className="w-1/2 relative pl-4">
          <div className=" w-1 h-full absolute left-0 top-0 bg-cyan-500 rounded-lg" />
          <span className="text-xs text-gray-500">Spend</span>
          <span className="block text-sm font-bold">RS {data.spend || 0}</span>
        </div>
        <div className="w-1/2 relative pl-4">
          <div className=" w-1 h-full absolute left-0 top-0 bg-green-500 rounded-lg" />
          <span className="text-xs text-gray-500">Remaining</span>
          <span className="block text-sm font-bold">
            $ {data.total - (data.spend || 0)}
          </span>
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
  )
}
