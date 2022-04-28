import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './pages/List';
import Form from './pages/Form';
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="list" element={<List />} />
        <Route path="form" element={<Form />} />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
