import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { DeleteDialog, EditDialog } from "./dialog"

export function BudgetsDropdown({ id }: any) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button>
          <Ellipsis />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 px-4">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <EditDialog text="Edit Budget" className="pl-0" id={id} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteDialog
              text="Delete Budget"
              className="text-red-700 pl-0"
              id={id}
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export function PotsDropdown({ id }: any) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button>
          <Ellipsis />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 px-4">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <EditDialog text="Edit Pot" className="pl-0" id={id} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteDialog
              text="Delete Pot"
              className="text-red-700 pl-0"
              id={id}
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
