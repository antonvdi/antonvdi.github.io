import {
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <p>Anton Irvolds hjemmeside</p>
      <nav>
        <Link to="/island">Link til G</Link>
      </nav>
    </div>
  );
}

export default App;
