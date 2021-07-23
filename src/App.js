import CharCards from './components/CharCards'
//import Test from './components/Test'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './sass/reset.scss';
//import rootReducer from './reducers/rootReducer';
import favReducer from './reducers/favReducer';

//const store = createStore(rootReducer);
const store = createStore(favReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CharCards />
      </Provider>
  {/* <Test />     */}
    </div>
  );
}

export default App;
