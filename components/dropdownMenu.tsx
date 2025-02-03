import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { DeleteDialog, EditDialog } from "./dialog_budget_controller"
import { PotsDeleteDialog, PotsEditDialog } from "./dialog_pots_controller"

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
export function PotsDropdown({ data }: any) {
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
            <PotsEditDialog text="Edit Pot" className="pl-0" data={data} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <PotsDeleteDialog
              text="Delete Pot"
              className="text-red-700 pl-0"
              data={data}
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
