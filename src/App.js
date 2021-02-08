import React from "react";
import "./styles.css";
import Ajv from "ajv";

export default function App() {
  var fddbSchema = require("./fddb.schema.json");
  var fddb = require("./fddb.json");

  const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(fddbSchema);
  const valid = validate(fddb);
  if (!valid) console.log(validate.errors);

  return (
    <div className="App">
      <h1>Hello low-carb-bakery frontend</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
