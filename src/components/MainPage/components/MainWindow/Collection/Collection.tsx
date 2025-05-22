import { ResizablePanel } from "@/components/ui/resizable";

export function Collection() {
  return (
    <ResizablePanel
      className="bg-zinc-900  ml-2 rounded-lg h-140"
      defaultSize={20}
      maxSize={20}
      minSize={5}
    >
      Collection
    </ResizablePanel>
  );
}
