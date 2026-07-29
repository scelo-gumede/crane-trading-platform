
import { Sidebar,SidebarContent,SidebarFooter,SidebarGroup,SidebarGroupLabel,SidebarHeader, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  User,
  History,
  Watch,
  LogOut
} from "lucide-react";

export default function AppSidebar(){


    return <Sidebar>

        <SidebarHeader className="text-2xl">Stockholm </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className="text-2xl font-extrabold mb-2">Main</SidebarGroupLabel>
                <SidebarMenu className="space-y-2 ">
                    <SidebarMenuItem className="cursor-pointer font-bold hover:bg-slate-400 text-slate-700 hover:text-slate-600 rounded-md flex  p-2"><LayoutDashboard className="mr-4" />  Dashboard</SidebarMenuItem>
                    <SidebarMenuItem className="cursor-pointer font-bold hover:bg-slate-400 text-slate-700 hover:text-slate-600 rounded-md flex  p-2"><User className="mr-4" /> Portfolio</SidebarMenuItem>
                    <SidebarMenuItem className="cursor-pointer font-bold hover:bg-slate-400 text-slate-700 hover:text-slate-600 rounded-md flex  p-2"><Settings className="mr-4"/> Settings</SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel className="text-2xl font-extrabold mb-2">Trading</SidebarGroupLabel>
                <SidebarMenu className="space-y-2 ">
                    <SidebarMenuItem className="cursor-pointer font-bold hover:bg-slate-400 text-slate-700 hover:text-slate-600 rounded-md flex  p-2"><History className="mr-4" /> History</SidebarMenuItem>
                    <SidebarMenuItem className="cursor-pointer font-bold hover:bg-slate-400 text-slate-700 hover:text-slate-600 rounded-md flex  p-2"><Watch className="mr-4"/> Watchlist</SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="cursor-pointer font-bold hover:bg-slate-400 text-slate-700 hover:text-slate-600 rounded-md flex flex-row  p-2"><LogOut /> Logout</SidebarFooter>
    </Sidebar>
}