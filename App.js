import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./components/addAward/Add"; // Ensure this file exists and exports Add correctly

function App() {
  // Define routes
  const route = createBrowserRouter([
    {
      path: "/create",
      element: <Add />, // Correct syntax
    },
  ]);

  return (
    <div>
      {/* Provide the router to the application */}
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
