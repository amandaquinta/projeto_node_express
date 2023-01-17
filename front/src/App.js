import './App.css';
import Menu from './components/menu';
import Routes from './route';
import { store } from "./components/redux/users-index"
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Menu/>
          <Routes />
      </div>
    </Provider>
  );
}

export default App;
