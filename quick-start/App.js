function Button() {
  return <button>This is a button </button>;
}

function App() {
  return (
    <div>
      <h1>React App</h1>
      <Button />
    </div>
  );
}

RenderDOM.render(<App />, document.getElementById("root"));
