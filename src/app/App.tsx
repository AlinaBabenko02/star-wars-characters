import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ConfigProvider, Space } from "antd";
import { StarryBackground } from "./components/starry-background/StarryBackground";
import { CharactersListScreen } from "./screens/characters-list/CharactersListScreen";
import { CharacterScreen } from "./screens/character/CharacterScreen";
import { antdTheme } from "../data/theme";

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <BrowserRouter>
        <StarryBackground />
        <Routes>
          <Route path="/characters" element={<CharactersListScreen />} />
          <Route path="/characters/:id" element={<CharacterScreen />} />
          <Route path="*" element={<Navigate to="/characters" replace />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
