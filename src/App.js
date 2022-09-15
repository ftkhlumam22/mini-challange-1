import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import ListName from "./pages/ListName";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListName />} />
        <Route path="/account/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
