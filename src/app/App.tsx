import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StarryBackground } from "./components/starry-background/StarryBackground";
import { CharactersListScreen } from "./screens/characters-list/CharactersListScreen";
import { CharacterScreen } from "./screens/character/CharacterScreen";

function App() {
  return (
    <BrowserRouter>
      <StarryBackground />
      <Routes>
        <Route path="/characters" element={<CharactersListScreen />} />
        <Route path="/characters/:id" element={<CharacterScreen />} />
        <Route path="*" element={<Navigate to="/characters" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
