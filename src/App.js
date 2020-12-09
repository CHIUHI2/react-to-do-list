import './App.css';
import ToDoList from './components/ToDoList'
import DoneGroupContainer from './containers/DoneGroupContainer';
import NotFound from "./components/NotFound"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/done-list">Done List</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/done-list" component={DoneGroupContainer} />
            <Route exact path="/" component={ToDoList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
