import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { StarryBackground } from "./components/starry-background/StarryBackground";
import { CharactersListScreen } from "./screens/characters-list/CharactersListScreen";
import { CharacterScreen } from "./screens/character/CharacterScreen";
import { antdTheme } from "../data/utils/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
