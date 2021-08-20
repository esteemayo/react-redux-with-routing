import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import axios from 'axios';

import Home from './pages/Home';
import User from './pages/User';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

axios.defaults.baseURL = 'https://reqres.in/api/users';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user/:id' component={User} />
            <Route>Not Found</Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
