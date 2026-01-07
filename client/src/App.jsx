import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react"; 
import "@aws-amplify/ui-react/styles.css";
import outputs from "../../amplify_outputs.json";
import FileUploader from "./components/FileUploader";


Amplify.configure(outputs);
const App = () => {
  return (
    <Authenticator>
     
        <Routes>
          <Route path="/" element={<FileUploader />} />
        </Routes>
    
    </Authenticator>
  );
};

export default App;
