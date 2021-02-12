import React from "react";
import "./styles.css";
import Ajv from "ajv";
import Header from "./Header";
import SaleItemList from "./SaleItemList";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  /*  var fddbSchema = require("./fddb.schema.json");
  var fddb = require("./fddb.json");

  const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(fddbSchema);
  const valid = validate(fddb);
  if (!valid) console.log(validate.errors);
*/
  /*  return (
    <div className="App">
      <h1>Hello low-carb-bakery frontend</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TestReact value="react test" />
      <Button variant="danger">react-bootstrap!</Button>
    </div>
  );
  */

  return (
    <div className="App">
      <Header></Header>
      <SaleItemList />
    </div>
  );
}
