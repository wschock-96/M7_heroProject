import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
import CreateCharacter from "./pages/CreateCharacter";
import EditCharacter from "./pages/EditCharacter";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/edit/:id" element={<EditCharacter />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;