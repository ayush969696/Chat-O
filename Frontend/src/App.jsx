import "./App.css"
import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/chats"  element={<ChatPage />} />
          <Route path="/register"  element={<Home />} />
          <Route path="/login"  element={<Home />} />
      </Routes>
     
    </div>
  );
}

export default App;
