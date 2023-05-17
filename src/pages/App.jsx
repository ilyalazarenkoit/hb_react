import { Route, Routes, Navigate } from "react-router-dom";
import "./App.module.css";
import { VideoMorpheusPage } from "./Video_Morpheus_Page/Video_Morpheus_Page";
import { PillsPage } from "./PillsPage/PillsPage";
import { EntryPage } from "./EntryPage/EntryPage";
import { ChatPage } from "./ChatPage/ChatPage";
import { MainVideoPage } from "./MainVideoPage/MainVideoPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/hello" element={<EntryPage />} />
      <Route path="/select-pill" element={<PillsPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/video_morpheus" element={<VideoMorpheusPage />} />
      <Route path="/main_video" element={<MainVideoPage />} />
      <Route path="*" element={<Navigate to="/hello" />} />
    </Routes>
  );
};

export default App;
