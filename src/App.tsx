import "./App.css";
import { useRoutes } from "react-router";
import { routers } from "./routers/routers";

function App() {
  const routing = useRoutes(routers);
  return <>{routing}</>;
}

export default App;
