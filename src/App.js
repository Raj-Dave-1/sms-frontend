//  🚩 Dada Ki Jay Ho 🚩

import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Footer from "./components/Footer";
import ViewStudent from "./components/ViewStudents";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <ViewStudent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
