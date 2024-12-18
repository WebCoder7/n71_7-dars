import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;