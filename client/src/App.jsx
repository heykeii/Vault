import { Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../../amplify_outputs.json";
import FileUploader from "./components/FileUploader";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";

Amplify.configure(outputs);
const App = () => {
  return (
    <Routes>
      <Route path="/upload" element={
        <ProtectedRoute>
          <FileUploader />
        </ProtectedRoute>
      } />
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;
