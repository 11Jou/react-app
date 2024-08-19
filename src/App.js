import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Article from "./Article";

function App() {
  return (
    <div>
      <MyFirstComponent />
      <Article name="Ahmed">
        <h1>Test Childern</h1>
      </Article>
    </div>
  );
}

export default App;
