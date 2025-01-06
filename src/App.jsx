import { useEffect, useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPanel from "./Pages/RegisterPanel/RegisterPanel";
import "./App.css";

import MainPage from "./Pages/MainPage/MainPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserInfo from "./Pages/UserInfo/UserInfo";

export const BooksContext = createContext();

function App() {
  const [AllBookListState, setAllBookListState] = useState([]);
  //localStorage.setItem("Products", JSON.stringify([]));
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <BooksContext.Provider value={{ AllBookListState, setAllBookListState, email, setEmail, password, setPassword }}>
      <Router>
        <Routes>
          <Route path="/Register" element={<RegisterPanel />}></Route>

          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <MainPage />
              // </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/UserInfo"
            element={
              <ProtectedRoute>
                <UserInfo />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </BooksContext.Provider>
  );
}

export default App;
