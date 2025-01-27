import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const Transaction = () => {
  return (
    <div className="container pb-5">
      <div className="flex justify-between flex-col mb-5 md:flex-row md:mb-0">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">Transaction</h1>
        <Button>
          <Plus /> Add New Transaction
        </Button>
      </div>
      <div className="bg-white p-8 rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Recipient / Sender</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Transaction Date</TableHead>
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

export default Transaction
