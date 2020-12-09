import './App.css';
import ToDoList from './components/ToDoList'
import DoneGroupContainer from './containers/DoneGroupContainer';
import NotFound from "./components/NotFound"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Menu } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="done-list">
              <Link to="/done-list">Done List</Link>
            </Menu.Item>
          </Menu>
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
