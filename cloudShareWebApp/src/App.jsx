import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Upload } from "./pages/Upload";
import Landing from "./pages/Landing.jsx";
import Dashbord from "./pages/Dashbord.jsx";

import MyFile from "./pages/MyFile.jsx";
import Subscription from "./pages/Subscription.jsx";
import Transaction from "./pages/Transaction.jsx";
import { RedirectToSignIn, Show } from "@clerk/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/dashboard"
          element={
            <>
              <Show when="signed-in">
                <Dashbord />
              </Show>
              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />

        <Route
          path="/upload"
          element={
            <>
              <Show when="signed-in">
                <Upload />
              </Show>
              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/my-files"
          element={
            <>
              <Show when="signed-in">
                <MyFile />
              </Show>
              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/subscription"
          element={
            <>
              <Show when="signed-in">
                <Subscription />
              </Show>
              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />
        <Route
          path="/transactions"
          element={
            <>
              <Show when="signed-in">
                <Transaction />
              </Show>
              <Show when="signed-out">
                <RedirectToSignIn />
              </Show>
            </>
          }
        />

        <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
