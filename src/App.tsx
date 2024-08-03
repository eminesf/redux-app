import { useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./routes/public.routes";
import Header from "@/components/Header";

const App: React.FC = () => {
  const routing = useRoutes(routes);
  return (
    <>
      <Header />
      {routing}
    </>
  );
};

export default App;
