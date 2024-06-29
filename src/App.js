import "./styles.css";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <Button>Clique aqui</Button>
      <br />
      <br />
      <Button secondary>Clique aqui 2</Button>
      <br />
      <br />
      <Button disabled>Clique aqui 3</Button>
    </div>
  );
}
