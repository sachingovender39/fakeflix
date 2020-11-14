
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import List from './Components/List';
import categories from './requests'
require('dotenv').config();
const https = require('https');

function App() {
//var categories = ['action','drama','scifi']
//   https.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3ffc6e9adf926b070e1649b22e4dec82&language=en-US',res => {
//   res.on('data', d => {
//    categories = JSON.parse(d).genres.map(item => item.name);
//    console.log(categories);
//   });
// });
  return (
    <div>
      <Header />
      {categories.map(category => <List title={category.name} fetchUrl={category.url}/>)}
      <Footer />
    </div>
  );
}

export default App;
