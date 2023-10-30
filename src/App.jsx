import { Provider } from 'react-redux';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <AllRoutes />
      </Provider>
    </div>
  );
}

export default App;
