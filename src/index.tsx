import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import './services/firebase'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
