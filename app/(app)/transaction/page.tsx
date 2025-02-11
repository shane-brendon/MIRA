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
import { createClient } from "@/utils/supabase/server"
import { TransactionAddDialog } from "@/components/dialog_transaction_controller"

const Transaction = async () => {
  const supabase = await createClient()

  const { data, error } = await supabase.from("transaction").select("*")
  if (error) {
    console.error("Error fetching budgets:", error.message)
    return null
  }

  const hasData = data.length > 0 ? true : false
  return (
    <div className="container pb-5">
      <div className="flex justify-between flex-col mb-5 md:flex-row md:mb-0">
        <h1 className="text-3xl text-gray-900 font-bold mb-8">Transaction</h1>
        {hasData && <TransactionAddDialog text="Add New Transaction" />}
      </div>
      <div className="bg-white p-8 rounded-md">
        {hasData ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">
                    Recipient / Sender
                  </TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Transaction Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TransactionItem data={item} key={index} />
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          <div className="text-center min-h-[70vh] flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold capitalize">Please add a transaction</h2>
            <div>
              <TransactionAddDialog text="Add New Transaction" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transaction

function TransactionItem({ data }: any) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-lime-400 grid place-items-center rounded-full font-bold">
            {data.name[0].toUpperCase()}
          </div>
          <div className="text-sm font-bold">{data.name.toUpperCase()}</div>
        </div>
      </TableCell>
      <TableCell>{data.category}</TableCell>
      <TableCell>{data.created_at.split("T")[0]}</TableCell>
      <TableCell
        className={`text-right text-gray-500 text-xs ${data.transfer_type === "Receiving" ? "text-green-700" : "text-red-800"}`}
      >
        {data.transfer_type === "Receiving" ? "+" : "-"} ${data.amount}
      </TableCell>
    </TableRow>
  )
}
