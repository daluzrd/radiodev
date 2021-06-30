import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import Player from './components/Player'
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
			<Player />
    </AudioContextProvider>
	)
}

export default App
