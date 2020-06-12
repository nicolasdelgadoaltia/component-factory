import React from 'react';
import ReactDOM from 'react-dom';
import Form1 from "./components/form1";
import Form2 from "./components/form2";
import './index.css';
import * as serviceWorker from './serviceWorker';

const reactComponents = {
  "form1": Form1,
  "form2": Form2,
}

const renderReactComponent = (formId, elementId, context = null) => {
  const ComponentToRender = reactComponents[formId];
  console.log(context);
  const componentProps = context ? context : {};

  ReactDOM.render(
    <React.StrictMode>
      <ComponentToRender {...componentProps} />
    </React.StrictMode>,
    document.getElementById(elementId)
  );

}

window.renderReactComponent = renderReactComponent;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


