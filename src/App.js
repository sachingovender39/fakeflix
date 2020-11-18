import React from 'react'
import './App.css';
import Footer from './Components/Footer'
import List from './Components/List';
import categories from './requests'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Youtube from 'react-youtube'
import movie_trailer from 'movie-trailer'
require('dotenv').config();


function App() {
  const originals = categories.filter(category => category.name ==='Netflix Originals')[0];
  const [trailer,setTrailer]= React.useState({enable:false,name:''});
  function viewTrailer(name){
    console.log(name);
      movie_trailer(name || '').then(
            (url) =>{
                const params = new URLSearchParams(new URL(url).search);
                setTrailer({enable:true,name:params.get('v')});
                const focusDiv = document.getElementById('trailer');
                focusDiv.classList.add('focused');
            }
        )
        .catch((error) => alert('Oops! Video not available at this time.'));
}
function unfocus(){
  const focusDiv = document.getElementById('trailer');
  setTrailer({enable:false, name:''});
  focusDiv.classList.remove('focused');
}

  const opts = {
    height:'700',
    width:'100%',
    playerVars:{autoplay:1}
}

  document.addEventListener('keydown',(event) => {
    if (event.key==='Escape'){
      console.log('pressed');
      unfocus();
    }
  });

  function KeyPress(event){
    console.log(event);
  }

  return (
    <div className='App'>
  <div className='splash'>
    <img className='fade-in'src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' height='80px' style={{top:'50px'}}></img>
  </div>
      <div className='content'>
      <Header />
      <Banner url={originals.url} view={viewTrailer} />
      {categories.map(category => <List title={category.name} fetchUrl={category.url} view={viewTrailer} />)}
      <Footer />
      </div>
      <div id='trailer' onClick={unfocus} onKeyDown={KeyPress}>
        {trailer.enable && (<div className='player'><Youtube videoId={trailer.name} opts={opts} /></div>)}
      </div>
    </div>
  );
}

export default App;
