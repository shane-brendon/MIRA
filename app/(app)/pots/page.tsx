import {
  PotsAddDialog,
  AddFundsDialog,
  SubsFundsDialog,
} from "@/components/dialog_pots_controller"
import { PotsDropdown } from "@/components/dropdownMenu"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { createClient } from "@/utils/supabase/server"
import { Ellipsis, Plus } from "lucide-react"
import React from "react"

const Pots = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("pots").select("*")
  if (error) {
    console.error("Error fetching budgets:", error.message)
    return null
  }
  return (
    <div className="container pb-5">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">Pots</h1>
        <PotsAddDialog text={"Add New Pot"} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.map((item, index) => (
          <PotsItem data={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Pots

function PotsItem({ data }: any) {
  const themes = [
    { name: "Green", color: "#277C78" },
    { name: "Yellow", color: "#F2CDAC" },
    { name: "Cyan", color: "#82C9D7" },
    { name: "Navy", color: "#626070" },
    { name: "Red", color: "#C94736" },
    { name: "Purple", color: "#826CB0" },
  ]

  const color = themes.find((element) => element.name === data.theme)?.color
  return (
    <div className=" bg-white p-8 rounded-md w-full">
      <div className="flex justify-between mb-5">
        <div className="flex items-center gap-4">
          <span className={`block w-4 h-4 bg-[${color}] rounded-3xl`} />
          <div className="font-bold text-xl">{data.name}</div>
        </div>
        <PotsDropdown data={data} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500"> Total saved</span>
        <span className="font-bold text-3xl">Rs {data.total_saved || 0}</span>
      </div>
      <Progress value={33} />
      <div className="flex justify-between items-center mt-3 text-xs mb-10">
        <span className="font-bold text-gray-500">
          {(data.total_saved / data.target) * 100}%
        </span>
        <span className="text-gray-500">Target of Rs {data.target}</span>
      </div>
      <div className="flex gap-4">
        <AddFundsDialog text=" + Add Money" data={data} />
        <SubsFundsDialog text="Withdraw" data={data} />
      </div>
    </div>
  )
}
