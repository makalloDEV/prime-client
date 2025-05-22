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
          {/* Левая панель - коллекция */}
          <Collection />

          <ResizableHandle className="bg-black ml-1 mr-1 w-1 hover:bg-zinc-700 transition-colors" />

          {/* Правая панель - MainSection с контентом страниц */}
          <MainSection />
        </ResizablePanelGroup>
      </div>

      <Player />
    </div>
  );
}

export default MainPage;
