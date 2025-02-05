"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { data } from "autoprefixer"

// craete
export function BillsAddDialog({ text, title }: any) {
  const [amount, setAmount] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())

  const supabase = createClient()

  const CreateBills = async () => {
    try {
      const payday = date ? date.toISOString() : null
      const { data, error } = await supabase
        .from("bills")
        .insert({ title: name, amount: amount, due_date: payday })
        .select()
    } catch (error) {
      console.log("Unexpected error:", error)
    }
  }
  console.log(date)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus /> {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>

          <span className="text-3xl font-bold mb-3">{text}</span>
          <DialogDescription>
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </DialogDescription>
        </DialogHeader>
        <form action="" noValidate={true}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="name"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Pot Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-4"
                type="text"
                placeholder="e.g Rainy days"
              />
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="amount"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Target
              </Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="col-span-4"
                type="number"
                placeholder="e.g Rs 3000"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                CreateBills()
                setIsSubmitting(true)
              }}
              className={
                isSubmitting ? " cursor-not-allowed pointer-events-none" : ""
              }
            >
              Add Recurring Bill
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
// update
// export function BillsEditDialog({ text, id }: any) {
//   const [open, setOpen] = useState(false)
//   const [target, setTarget] = useState("")
//   const [theme, setTheme] = useState("")
//   const [potName, setPotName] = useState("")
//   const updateFields: Record<string, any> = {}

//   if (potName !== undefined && potName !== null && potName !== "")
//     updateFields.name = potName
//   if (target !== undefined && target !== null && target !== "")
//     updateFields.target = target
//   if (theme !== undefined && theme !== null && theme !== "")
//     updateFields.theme = theme

//   const supabase = createClient()
//   const updateBills = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("Bills")
//         .update(updateFields)
//         .eq("id", id)
//         .select()
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button
//           variant="ghost"
//           className="w-full text-left px-4 justify-start"
//           onClick={(e) => {
//             e.preventDefault() // Prevents dropdown from closing
//             setOpen(true)
//           }}
//         >
//           {text}
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[560px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>

//           <span className="text-3xl font-bold mb-3">{text}</span>
//           <DialogDescription>
//             Choose a category to set a spending budget. These categories can
//             help you monitor spending.
//           </DialogDescription>
//         </DialogHeader>
//         <form action="">
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-2">
//               <Label
//                 htmlFor="name"
//                 className="text-left font-bold text-gray-900 opacity-50"
//               >
//                 Pot Name
//               </Label>
//               <Input
//                 id="name"
//                 value={potName}
//                 onChange={(e) => setPotName(e.target.value)}
//                 className="col-span-4"
//                 type="text"
//                 placeholder="e.g Rainy days"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-2">
//               <Label
//                 htmlFor="amount"
//                 className="text-left font-bold text-gray-900 opacity-50"
//               >
//                 Target
//               </Label>
//               <Input
//                 id="amount"
//                 value={target}
//                 onChange={(e) => setTarget(e.target.value)}
//                 className="col-span-4"
//                 type="number"
//                 placeholder="e.g Rs 3000"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-2">
//               <Label
//                 htmlFor="name"
//                 className="text-left font-bold text-gray-900 opacity-50"
//               >
//                 Theme
//               </Label>
//               <Select value={theme} onValueChange={(e) => setTheme(e)}>
//                 <SelectTrigger className="col-span-4 rounded-[8px] bg-white">
//                   <SelectValue
//                     placeholder="Select a theme"
//                     className="text-black"
//                   />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Theme</SelectLabel>
//                     <SelectItem value="Green">
//                       <div className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-[#277C78] rounded-full inline-block" />
//                         Green
//                       </div>
//                     </SelectItem>
//                     <SelectItem value="Yellow">
//                       <div className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-[#F2CDAC] rounded-full inline-block" />
//                         Yellow
//                       </div>
//                     </SelectItem>
//                     <SelectItem value="Cyan">
//                       <div className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-[#82C9D7] rounded-full inline-block" />
//                         Cyan
//                       </div>
//                     </SelectItem>
//                     <SelectItem value="Navy">
//                       <div className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-[#626070] rounded-full inline-block" />
//                         Navy
//                       </div>
//                     </SelectItem>
//                     <SelectItem value="Red">
//                       <div className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-[#C94736] rounded-full inline-block" />
//                         Red
//                       </div>
//                     </SelectItem>
//                     <SelectItem value="Purple">
//                       <div className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-[#826CB0] rounded-full inline-block" />
//                         Purple
//                       </div>
//                     </SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="submit" onClick={() => updateBills()}>
//               Save changes
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }
//delete
// export function BillsDeleteDialog({ text, id }: any) {
//   const [open, setOpen] = useState(false)

//   const supabase = createClient()
//   const deleteBudget = async () => {
//     try {
//       const { error } = await supabase.from("Bills").delete().eq("id", id)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button
//           variant="ghost"
//           className="w-full text-left text-red-700 px-4"
//           onClick={(e) => {
//             e.preventDefault()
//             setOpen(true)
//           }}
//         >
//           {text}
//         </Button>
//       </DialogTrigger>
//       <DialogContent
//         onClick={(e) => e.stopPropagation()}
//         className="sm:max-w-[560px]"
//       >
//         <DialogHeader>
//           <DialogTitle>Delete ‘Entertainment’?</DialogTitle>
//           <DialogDescription>
//             Are you sure you want to delete this budget? This action cannot be
//             reversed, and all the data inside it will be removed forever.
//           </DialogDescription>
//         </DialogHeader>
//         <form action="">
//           <DialogFooter className="items-center !justify-center !flex-col mt-6">
//             <Button
//               type="submit"
//               onClick={() => {
//                 deleteBudget()
//                 setOpen(false)
//               }}
//               variant={"destructive"}
//               className="w-full"
//             >
//               Yes, Confirm Deletion
//             </Button>
//             <Button onClick={() => setOpen(false)} variant={"ghost"}>
//               No, Go Back
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }
