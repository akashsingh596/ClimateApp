// import { Button } from "@/components/ui/button";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>Hello</Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
