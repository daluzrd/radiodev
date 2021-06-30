import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import { Home } from './pages/Home'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/Main' />
				</Route>
				<Route exact path='/Main' component={Home} />
			</Switch>
		</Router>
	)
}

export default App
