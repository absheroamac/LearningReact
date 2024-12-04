import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }

    case "UPDATE": {
      return {
        name: action.name,
        age: state.age,
      };
    }
  }
}

const initialState = { name: "Absher", age: 24 };

function App() {
  const promise = new Promise((resolve, reject) => {
    const check = false;
    if (check) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });

  promise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    })
    .then((value) => {
      console.log("After catch");
    })
    .finally(() => {
      console.log("Great!");
    });

  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First Promise"), 2000);
  });
  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second Promise"), 1000);
  });

  Promise.race([promise1, promise2])
    .then((value) => {
      console.log("success " + value);
    })
    .catch((error) => {
      console.log("One of the promise is failed!");
    });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE", name: e.target.name.value });
  };

  return (
    <div className="App">
      <h1>{state.name}</h1>
      <h2>{state.age}</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enter new name"></input>
        <button type="submit">Update Name</button>
      </form>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase Age
      </button>
    </div>
  );
}

export default App;
