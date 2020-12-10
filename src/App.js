import './App.css';
import ToDoListGrid from './components/ToDoListGrid';
import DoneListGrid from './components/DoneListGrid';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';


function App() {
  return (
    <BrowserRouter>
      	<Layout>
			<Layout.Header>
				<Navigation />
			</Layout.Header>
			<Layout.Content>
				<Switch>
					<Route exact path="/done-list" component={DoneListGrid} />
					<Route exact path="/" component={ToDoListGrid} />
					<Route component={NotFound} />
				</Switch>
			</Layout.Content>
			<Layout.Footer>
  				<span>ToDo List © {new Date().getFullYear()} Created by Hins</span>
			</Layout.Footer>
    	</Layout>
    </BrowserRouter>
  );
}

export default App;
