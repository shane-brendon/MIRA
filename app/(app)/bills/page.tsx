import { BillsAddDialog } from "@/components/dialog_bills_controller"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { createClient } from "@/utils/supabase/server"
import { CircleAlert, CircleCheck, ReceiptText } from "lucide-react"
import React from "react"

const Bills = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("bills").select("*")
  if (error) {
    console.error("Error fetching budgets:", error.message)
    return null
  }

  console.log(data)
  return (
    <div className="container pb-5">
      <div className="flex justify-between flex-col mb-5 md:flex-row md:mb-0">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">
          Recurring Bills
        </h1>
        <BillsAddDialog text="Add Recurring Bills" />
      </div>
      <div className="flex gap-5 items-start flex-col md:flex-row">
        <div className="w-full md:w-2/6">
          <div className="p-6 bg-gray-900 text-white rounded-md">
            <ReceiptText />
            <span className="mt-5 block text-sm mb-3 opacity-80">
              Total Bills
            </span>
            <span className="block font-bold text-3xl">
              {`Rs
               ${data
                 .map((item) => item.amount)
                 .reduce((prev, next) => prev + next)}`}
            </span>
          </div>

          {/* <div className="p-6 bg-white text-gray-900 rounded-md mt-6">
            <span className="font-bold text-xl">Summary</span>
            <Table className="mt-1">
              <TableBody>
                <TableRow>
                  <TableCell className="px-0 text-gray-500">
                    Paid Bills
                  </TableCell>
                  <TableCell className="text-right text-xs px-0 font-bold">
                    4 ($190.00)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="px-0 text-gray-500">
                    Total Upcoming
                  </TableCell>
                  <TableCell className="text-right text-xs px-0 font-bold">
                    4 ($194.98)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="px-0 text-red-500">Due Soon</TableCell>
                  <TableCell className="text-right text-xs px-0 font-bold text-red-500">
                    2 ($59.98)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div> */}
        </div>

        <div className="w-full bg-white rounded-md p-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Bill Title</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <BillsItem data={item} key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Bills

function BillsItem({ data }: any) {
  function getOrdinalDate(day: any) {
    const date = day?.split("-")[2].split("T")[0] || 8
    const suffixes = ["th", "st", "nd", "rd"]
    const mod10 = date % 10
    const mod100 = date % 100
    const suffix =
      mod10 > 3 || (mod100 >= 11 && mod100 <= 13) ? "th" : suffixes[mod10]
    return `${date}${suffix}`
  }
  return (
    <>
      <TableRow>
        <TableCell className="font-medium">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
              {data.title[0].toUpperCase()}
            </div>
            <div className="text-sm font-bold">{data.title.toUpperCase()}</div>
          </div>
        </TableCell>
        <TableCell className="text-green-600 flex items-center gap-2">
          Monthly - {getOrdinalDate(data.due_date)} <CircleCheck />
        </TableCell>
        <TableCell className="text-right text-gray-900 text-sm font-bold">
          Rs {data.amount}
        </TableCell>
      </TableRow>
    </>
  )
}
