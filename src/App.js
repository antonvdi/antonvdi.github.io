import {Link,} from "react-router-dom";
import HeartButton from "./components/HeartButton.js"
import Intro from "./components/Intro.js";

function App() {
  return (
    <div>
      <p>Anton Irvolds hjemmeside</p>
      <Intro></Intro>
      <nav>
        <HeartButton link="/island"></HeartButton>
      </nav>
    </div>
  );
}

export default App;
