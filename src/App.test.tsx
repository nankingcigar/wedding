/*
 * @Author: Chao Yang 
 * @Date: 2019-03-08 09:14:55 
 * @Last Modified by:   Chao Yang 
 * @Last Modified time: 2019-03-08 09:14:55 
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
