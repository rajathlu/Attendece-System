import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation/Navigation';
// import rootReducer from './reducers';
// import { createStore } from 'redux';
// import __configureStore from "./Components/InitializeReducer"
import store from "./Components/InitializeReducer/index"

function App() {

  // const store = createStore(rootReducer);
  return (
  <Provider store={store} >
       <BrowserRouter>
       <Navigation/>

       </BrowserRouter>
       </Provider>

   
   
  );
}

export default App;
