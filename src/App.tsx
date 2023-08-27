import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";

function App() {
  const userJSON = localStorage.getItem("netflix-user");
  const [userDetails, setUserDetails] = useState(
    userJSON !== null ? JSON.parse(userJSON) : null
  );
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <Routes>
        {Object.keys(ROUTES).map((key) => {
          const { path, page, isProtected } = ROUTES[key];
          return (
            isProtected && !userDetails ? (
              <Route path={path} key={key} element={ROUTES.SIGNIN.page} />
            ) : (
              <></>
            ),
            !isProtected && userDetails ? (
              <Route path={path} key={key} element={ROUTES.BROWSE.path} />
            ) : (
              <></>
            ),
            (<Route path={path} key={key} element={page} />)
          );
        })}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
