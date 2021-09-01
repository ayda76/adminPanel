
import './App.css';
import MainPage from './components/Mainpage/MainPage';
//import Products from './components/Mainpage/Products/Products';
import ContextProductProvider from './store/Products/ContextProductProvider';
import ContextUserProvider from './store/Users/ContextUserProvider';

function App() {
  return (
    <div className="App">
      <ContextProductProvider>
        <ContextUserProvider>
 <MainPage/>
 </ContextUserProvider>
      </ContextProductProvider>
 
    </div>
  );
}

export default App;
