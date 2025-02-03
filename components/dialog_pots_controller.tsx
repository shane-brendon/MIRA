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
export function PotsAddDialog({ text, title }: any) {
  const [target, setTarget] = useState("")
  const [theme, setTheme] = useState("")
  const [potName, setPotName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const supabase = createClient()
  const themes = [
    { name: "Green", color: "#277C78" },
    { name: "Yellow", color: "#F2CDAC" },
    { name: "Cyan", color: "#82C9D7" },
    { name: "Navy", color: "#626070" },
    { name: "Red", color: "#C94736" },
    { name: "Purple", color: "#826CB0" },
  ]
  const CreatePots = async () => {
    try {
      const { data, error } = await supabase
        .from("pots")
        .insert({ name: potName, target: target, theme: theme })
        .select()
    } catch (error) {
      console.log(error)
    }
  }
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
                value={potName}
                onChange={(e) => setPotName(e.target.value)}
                className="col-span-4"
                type="text"
                placeholder="e.g Rainy days"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="amount"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Target
              </Label>
              <Input
                id="amount"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="col-span-4"
                type="number"
                placeholder="e.g Rs 3000"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="name"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Theme
              </Label>
              <Select value={theme} onValueChange={(e) => setTheme(e)}>
                <SelectTrigger className="col-span-4 rounded-[8px] bg-white">
                  <SelectValue
                    placeholder="Select a theme"
                    className="text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Theme</SelectLabel>
                    {themes.map((theme) => (
                      <SelectItem key={theme.name} value={theme.name}>
                        <div className="flex items-center gap-4">
                          <div
                            className="w-4 h-4 rounded-full inline-block"
                            style={{ backgroundColor: theme.color }}
                          />
                          {theme.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                CreatePots()
                setIsSubmitting(true)
              }}
              className={
                isSubmitting ? " cursor-not-allowed pointer-events-none" : ""
              }
            >
              Add Pot
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
// update
export function PotsEditDialog({ text, id }: any) {
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState("")
  const [theme, setTheme] = useState("")
  const [potName, setPotName] = useState("")
  const updateFields: Record<string, any> = {}

  if (potName !== undefined && potName !== null && potName !== "")
    updateFields.name = potName
  if (target !== undefined && target !== null && target !== "")
    updateFields.target = target
  if (theme !== undefined && theme !== null && theme !== "")
    updateFields.theme = theme

  const supabase = createClient()
  const updatePots = async () => {
    try {
      const { data, error } = await supabase
        .from("pots")
        .update(updateFields)
        .eq("id", id)
        .select()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full text-left px-4 justify-start"
          onClick={(e) => {
            e.preventDefault() // Prevents dropdown from closing
            setOpen(true)
          }}
        >
          {text}
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
        <form action="">
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
                value={potName}
                onChange={(e) => setPotName(e.target.value)}
                className="col-span-4"
                type="text"
                placeholder="e.g Rainy days"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="amount"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Target
              </Label>
              <Input
                id="amount"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="col-span-4"
                type="number"
                placeholder="e.g Rs 3000"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="name"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Theme
              </Label>
              <Select value={theme} onValueChange={(e) => setTheme(e)}>
                <SelectTrigger className="col-span-4 rounded-[8px] bg-white">
                  <SelectValue
                    placeholder="Select a theme"
                    className="text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Theme</SelectLabel>
                    <SelectItem value="Green">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#277C78] rounded-full inline-block" />
                        Green
                      </div>
                    </SelectItem>
                    <SelectItem value="Yellow">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#F2CDAC] rounded-full inline-block" />
                        Yellow
                      </div>
                    </SelectItem>
                    <SelectItem value="Cyan">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#82C9D7] rounded-full inline-block" />
                        Cyan
                      </div>
                    </SelectItem>
                    <SelectItem value="Navy">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#626070] rounded-full inline-block" />
                        Navy
                      </div>
                    </SelectItem>
                    <SelectItem value="Red">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#C94736] rounded-full inline-block" />
                        Red
                      </div>
                    </SelectItem>
                    <SelectItem value="Purple">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-[#826CB0] rounded-full inline-block" />
                        Purple
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => updatePots()}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
//delete
export function PotsDeleteDialog({ text, id }: any) {
  const [open, setOpen] = useState(false)

  const supabase = createClient()
  const deleteBudget = async () => {
    try {
      const { error } = await supabase.from("pots").delete().eq("id", id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full text-left text-red-700 px-4"
          onClick={(e) => {
            e.preventDefault()
            setOpen(true)
          }}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        className="sm:max-w-[560px]"
      >
        <DialogHeader>
          <DialogTitle>Delete ‘Entertainment’?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this budget? This action cannot be
            reversed, and all the data inside it will be removed forever.
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <DialogFooter className="items-center !justify-center !flex-col mt-6">
            <Button
              type="submit"
              onClick={() => {
                deleteBudget()
                setOpen(false)
              }}
              variant={"destructive"}
              className="w-full"
            >
              Yes, Confirm Deletion
            </Button>
            <Button onClick={() => setOpen(false)} variant={"ghost"}>
              No, Go Back
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

//add funds into budget
export function AddFundsDialog({ text, data: items }: any) {
  const [open, setOpen] = useState(false)
  const [total_saved, setTotal_saved] = useState("")
  const [addAmount, setAddAmount] = useState("0")
  const updateFields: Record<string, any> = {}
  let currentTotal =
    (items.total_saved || 0) + parseInt(addAmount ? addAmount : "0")

  if (total_saved !== undefined && total_saved !== null && total_saved !== "")
    updateFields.total_saved = currentTotal

  const supabase = createClient()
  const updatePots = async () => {
    try {
      const { data, error } = await supabase
        .from("pots")
        .update(updateFields)
        .eq("id", items.id)
        .select()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="offset"
          className="w-full text-center px-4 font-bold"
          onClick={(e) => {
            e.preventDefault() // Prevents dropdown from closing
            setOpen(true)
          }}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>

          <span className="text-3xl font-bold mb-3">add Money to pots</span>
          <DialogDescription>
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="grid gap-4 py-4">
            <div className="flex w-full items-center gap-2 justify-between">
              <span className="opacity-50 text-sm">New Amount</span>
              <span className="text-3xl font-bold">${currentTotal}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="amount"
                className="text-left font-bold text-gray-900 opacity-50 col-span-2"
              >
               Amount to Add
              </Label>
              <Input
                id="add"
                value={addAmount}
                onChange={(e) => {
                  setAddAmount(e.target.value)
                  setTotal_saved(currentTotal)
                }}
                className="col-span-4"
                type="number"
                placeholder="e.g Rs 3000"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => updatePots()}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

//substract funds from pots

export function SubsFundsDialog({ text, data: items }: any) {
  const [open, setOpen] = useState(false)
  const [total_saved, setTotal_saved] = useState(0)
  const [addAmount, setAddAmount] = useState("0")
  const updateFields: Record<string, any> = {}
  let currentTotal =
    (items.total_saved || 0) - parseInt(addAmount ? addAmount : "0")

  if (total_saved !== undefined && total_saved !== null)
    updateFields.total_saved = currentTotal

  const supabase = createClient()
  const updatePots = async () => {
    try {
      const { data, error } = await supabase
        .from("pots")
        .update(updateFields)
        .eq("id", items.id)
        .select()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="offset"
          className="w-full text-center px-4 font-bold"
          onClick={(e) => {
            e.preventDefault() // Prevents dropdown from closing
            setOpen(true)
          }}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>

          <span className="text-3xl font-bold mb-3">Withdraw from from pots</span>
          <DialogDescription>
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="grid gap-4 py-4">
            <div className="flex w-full items-center gap-2 justify-between">
              <span className="opacity-50 text-sm">New Amount</span>
              <span className="text-3xl font-bold">${currentTotal}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="amount"
                className="text-left font-bold text-gray-900 opacity-50 col-span-2"
              >
                Amount to Withdraw
              </Label>
              <Input
                id="add"
                value={addAmount}
                onChange={(e) => {
                  setAddAmount(e.target.value)
                  setTotal_saved(currentTotal)
                }}
                className="col-span-4"
                type="number"
                placeholder="e.g Rs 3000"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => updatePots()}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}