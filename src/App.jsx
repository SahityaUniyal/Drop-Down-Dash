import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { MyContextProvider, useMyContext } from "./context/MyContext";
function App() {
  const context = useMyContext();
  return (
    <MyContextProvider value={{ ...context }}>
      <Header />
      <Outlet />
    </MyContextProvider>
  );
}

export default App;
