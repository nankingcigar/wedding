/*
 * @Author: Chao Yang
 * @Date: 2019-02-26 10:23:29
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-03-08 16:45:49
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import "./index.less";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <App />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
