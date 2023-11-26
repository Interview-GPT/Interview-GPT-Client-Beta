import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div>
      <Workspace/>
      {/* <Navbar />
      <Outlet /> */}
    </div>
  );
}

export default App;
