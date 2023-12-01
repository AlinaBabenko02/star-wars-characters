import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ConfigProvider, Space } from "antd";
import { StarryBackground } from "./components/starry-background/StarryBackground";
import { CharactersListScreen } from "./screens/characters-list/CharactersListScreen";
import { CharacterScreen } from "./screens/character/CharacterScreen";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1f1f3a",
          borderRadius: 8,
          fontSize: 18,
        },
        components: {
          Input: {
            paddingBlock: 8,
          },
        },
      }}
    >
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
