import { useTheme } from "../../ui-design-system";
import "./App.scss";
import { Form } from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
