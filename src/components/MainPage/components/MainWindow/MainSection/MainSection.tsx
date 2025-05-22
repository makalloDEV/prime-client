import { ResizablePanel } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";

export function MainSection() {
  return (
    <ResizablePanel className="bg-zinc-900 mr-2 rounded-lg">
      <Outlet />
    </ResizablePanel>
  );
}
