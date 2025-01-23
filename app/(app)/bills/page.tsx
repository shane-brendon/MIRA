import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CircleAlert, CircleCheck, Plus, ReceiptText } from "lucide-react"
import React from "react"

const Bills = () => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">
          Recurring Bills
        </h1>
        <Button>
          <Plus /> Add Recurring Bills
        </Button>
      </div>
      <div className="flex gap-8 items-start">
        <div className=" w-2/6">
          <div className="p-6 bg-gray-900 text-white rounded-md">
            <ReceiptText />
            <span className="mt-8 block text-sm mb-3 opacity-80">
              Total Bills
            </span>
            <span className="block font-bold text-3xl">$384.98</span>
          </div>

          <div className="p-6 bg-white text-gray-900 rounded-md mt-6">
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
          </div>
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
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
                      E
                    </div>
                    <div className="text-sm font-bold">Emma Richardson</div>
                  </div>
                </TableCell>
                <TableCell className="text-green-600 flex items-center gap-2">
                  {" "}
                  Monthly - 2nd <CircleCheck />
                </TableCell>
                <TableCell className="text-right text-gray-900 text-sm font-bold">
                  $100.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
                      E
                    </div>
                    <div className="text-sm font-bold">Emma Richardson</div>
                  </div>
                </TableCell>
                <TableCell className="text-red-600 flex items-center gap-2">
                  {" "}
                  Monthly - 2nd <CircleAlert />{" "}
                </TableCell>
                <TableCell className="text-right text-gray-900 text-sm font-bold">
                  $100.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Bills
