import { useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./routes/public.routes";

const App: React.FC = () => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};

export default App;
