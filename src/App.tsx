import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./routes/Client";
import Home from "./routes/Client/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
