
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0D1029]  flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        Welcome to Stackly Dashboard 🚀
      </h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/register" />}
        />

       
        <Route
          path="/register"
          element={<Register />}
        />

       
        <Route
          path="/login"
          element={<Login />}
        />

      
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
