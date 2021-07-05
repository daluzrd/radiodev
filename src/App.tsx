import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import { AudioContextProvider } from './contexts/audio'
import { UserContextProvider } from './contexts/user'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

const App = () => {
	return (
    <UserContextProvider>
      <AudioContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/Login' />
            </Route>
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Main' component={Home} />
          </Switch>
        </Router>
      </AudioContextProvider>
    </UserContextProvider>
	)
}

export default App
