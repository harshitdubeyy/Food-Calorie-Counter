import "./App.css";
import Header from "./My Components/Header";
import Foods from "./My Components/Foods";
import React, { useState, useEffect } from "react";
import { AddFood } from "./My Components/AddFood";
import { Table } from "./My Components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initFood;
  if (localStorage.getItem("foods") === null) {
    initFood = [];
  } else {
    initFood = JSON.parse(localStorage.getItem("foods"));
  }

  const onDelete = (food) => {
    console.log("Deleted", food);

    setFoods(
      foods.filter((e) => {
        return e !== food;
      })
    );

    localStorage.setItem("foods", JSON.stringify(foods));
  };
  const addFood = (
    title,
    desc,
    inputprotein,
    inputcarbs,
    inputfats,
    others
  ) => {
    console.log(
      "Adding food List",
      title,
      desc,
      inputprotein,
      inputcarbs,
      inputfats,
      others
    );
    let sno;
    if (foods.length === 0) {
      sno = 0;
    } else {
      sno = foods[foods.length - 1].sno + 1;
    }
    const myFood = {
      sno: sno,
      title: title,
      desc: desc,
      inputprotein: inputprotein,
      inputfats: inputfats,
      inputcarbs: inputcarbs,
      others: others,
    };
    setFoods([...foods, myFood]);
    console.log(myFood);
  };

  const [foods, setFoods] = useState(initFood);
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  return (
    <>
      {/* <AddFood addFood={addFood}/>    
    {/* <Foods foods={foods} onDelete={onDelete} buttonsview={"true"}/> */}
      {/* <Table foods={foods}/>  */}
      <Router>
        <Header />

        <Switch>
          <Route
            exact
            path="/admin"
            render={() => {
              return (
                <>
                  <AddFood addFood={addFood} />
                  <Foods
                    foods={foods}
                    onDelete={onDelete}
                    buttonsview={"true"}
                  />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Foods
                    foods={foods}
                    onDelete={onDelete}
                    buttonsview={"false"}
                  />
                </>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
