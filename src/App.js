import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <i class="fab fa-github github-icon"></i>{" "}
          <a
            href="https://github.com/PasqualCarstens/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Pasqual Carstens
        </footer>
      </div>
    </div>
  );
}
