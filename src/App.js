import ReactDOM from 'react-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth'
import configureStore from './store/configureStore';
import AppRouter, { history  } from './components/AppRouter';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase'



const store = configureStore();

const App = () => (

  <Provider store={store}>
    <AppRouter />
  </Provider>
)



let hasRendered = false;

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('root'));
    hasRendered = true;
  }
}


firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/home')
      }
    })
  }else {
    store.dispatch(logout()); 
    renderApp();
    history.push('/'); 
  }
})
export default App;
   