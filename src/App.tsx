import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import { AudioContextProvider } from './contexts/audio'
import { Home } from './pages/Home'

const App = () => {
	return (
    <AudioContextProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/Main' />
          </Route>
          <Route exact path='/Main' component={Home} />
        </Switch>
      </Router>
    </AudioContextProvider>
	)
}

export default App
