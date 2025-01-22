import {
  ArrowDownUp,
  Calendar,
  ChartPie,
  Home,
  Inbox,
  ReceiptText,
  Search,
  Settings,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import SavingSvg from "./icons/SavingSvg"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "transaction",
    url: "/transaction",
    icon: ArrowDownUp,
  },
  {
    title: "Budgets",
    url: "/budgets",
    icon: ChartPie,
  },
  {
    title: "Pots",
    url: "/pots",
    icon: SavingSvg,
  },
  {
    title: "Recurring bills",
    url: "/bills",
    icon: ReceiptText ,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
