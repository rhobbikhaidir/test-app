import React, { Fragment, useState } from "react";
import { Route, Routes, Switch, Navigate } from "react-router-dom";
import Home from "./components/home";
import Reff from "./components/Reff";

// const pages = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     // { path: "component2", element: <Component2 /> },
//     // ...
//   ]);
//   return routes;
// };

function App() {
  const referral = [
    "0xD313",
    "0xD314",
    "0xD315",
    "0xD316",
    "0xD317",
    "0xD318",
    "0xD319",
    "0xD320",
    "0xD321",
  ];
  const myArray = Math.floor(Math.random() * referral.length);
  const random = referral[myArray];
  // console.log(random);
  const [refId, setRefId] = useState(random);
  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home refId={refId} setRefId={setRefId} />}
        />
        <Route exact path="/reff/:id" element={<Reff id={refId} />} />
        <Route path="/reff" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
