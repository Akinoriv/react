import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Form />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
