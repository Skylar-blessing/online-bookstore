
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Itemlist from './components/Itemlist';
import Cart from './components/Cart';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <h1>Book-Store</h1>
      <Nav />
      <Search />
      <Itemlist />
      <Categories />
      <Cart />
    </div>
  );
}

export default App;
