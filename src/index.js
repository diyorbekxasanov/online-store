import { render } from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import store from "./store"
render(
  <Provider store={store}>
    <BrowserRouter>
     <ToastContainer/>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

