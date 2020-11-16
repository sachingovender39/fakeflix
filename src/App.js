
import './App.css';
import Footer from './Components/Footer'
import List from './Components/List';
import categories from './requests'
import Banner from './Components/Banner'
import Header from './Components/Header'
require('dotenv').config();
const https = require('https');

function App() {
  const originals = categories.filter(category => category.name ==='Netflix Originals')[0];
  console.log(originals);
  return (
    <div className='App'>
      <Header />
      <Banner url={originals.url}/>
      {categories.map(category => <List title={category.name} fetchUrl={category.url}/>)}
      <Footer />
    </div>
  );
}

export default App;
