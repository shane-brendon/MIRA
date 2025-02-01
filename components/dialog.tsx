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

// craete
export function AddDialog({ text }: any) {
  const [maxSpend, setMaxSpend] = useState("")
  const [theme, setTheme] = useState("")
  const [category, setCategory] = useState("")
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
                Budget Category
              </Label>
              <Select value={category} onValueChange={(e) => setCategory(e)}>
                <SelectTrigger className="col-span-4 rounded-[8px] bg-white">
                  <SelectValue
                    placeholder="Select a category"
                    className="text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Bills">Bills</SelectItem>
                    <SelectItem value="Groceries">Groceries</SelectItem>
                    <SelectItem value="Dining Out">Dining Out</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Personal Care">Personal Care</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="lifestyle">lifestyle</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="name"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Maximum Spend
              </Label>
              <Input
                id="name"
                value={maxSpend}
                onChange={(e) => setMaxSpend(e.target.value)}
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
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
// update
export function EditDialog({ text }: any) {
  const [open, setOpen] = useState(false)
  const [maxSpend, setMaxSpend] = useState("")
  const [theme, setTheme] = useState("")
  const [category, setCategory] = useState("")

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
                Budget Category
              </Label>
              <Select value={category} onValueChange={(e) => setCategory(e)}>
                <SelectTrigger className="col-span-4 rounded-[8px] bg-white">
                  <SelectValue
                    placeholder="Select a category"
                    className="text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Bills">Bills</SelectItem>
                    <SelectItem value="Groceries">Groceries</SelectItem>
                    <SelectItem value="Dining Out">Dining Out</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Personal Care">Personal Care</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="lifestyle">lifestyle</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="name"
                className="text-left font-bold text-gray-900 opacity-50"
              >
                Maximum Spend
              </Label>
              <Input
                id="name"
                value={maxSpend}
                onChange={(e) => setMaxSpend(e.target.value)}
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
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
//delete
export function DeleteDialog({ text }: any) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full text-left text-red-700 px-4"
          onClick={(e) => {
            e.preventDefault() // Prevents dropdown from closing
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
          Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="items-center !justify-center !flex-col mt-6">
          <Button onClick={() => setOpen(false)} variant={'destructive'} className="w-full">Yes, Confirm Deletion</Button>
          <Button onClick={() => setOpen(false)} variant={'ghost'}>No, Go Back</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
