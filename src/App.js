import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './pages/List';
import Form from './pages/Form';
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/didactic-guacamole" element={<List />} />
        <Route path="didactic-guacamole/list" element={<List />} />
        <Route path="didactic-guacamole/form" element={<Form />} />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
