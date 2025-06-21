import { Header } from "./components/Header/Header";

import "./index.css";
import { Player } from "./components/Player/Player";
import { ResizableHandle, ResizablePanelGroup } from "../ui/resizable";
import { Collection } from "./components/MainWindow/Collection/Collection";
import { MainSection } from "./components/MainWindow/MainSection/MainSection";

function MainPage() {
  return (
    <div className="bg-black flex flex-col ">
      <Header />

      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full"
        >
          <Collection />

          <ResizableHandle className="bg-black ml-1 mr-1 w-1 " />

          <MainSection />
        </ResizablePanelGroup>
      </div>

      <Player />
    </div>
  );
}

export default MainPage;
