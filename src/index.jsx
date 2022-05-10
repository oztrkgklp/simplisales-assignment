import React from "react";
import { render } from "react-dom";
import App from "./App";


/** My styles */
import "./styles/css/index.css";
import "./styles/sass/index.sass";
import "./styles/scss/index.scss";
import "./styles/less/index.less";

/** Vendor */
import "./styles/vendor/css/index.css";
import "./styles/vendor/sass/index.sass";
import "./styles/vendor/scss/index.scss";
import "./styles/vendor/less/index.less";


// Create app root
render(<App />, document.getElementById('root'));