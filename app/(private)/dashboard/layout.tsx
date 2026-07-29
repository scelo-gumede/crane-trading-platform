import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/dashboard/app-sidebar"



export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {


    
  return <SidebarProvider>
        <AppSidebar />
      <main>
        <SidebarTrigger className="cursor-pointer" />
      {children}
      </main>
    
    </SidebarProvider>
}