import React from 'react';
import axios from './base.js'
import Card from './Card'
import Youtube from 'react-youtube'
import movie_trailer from 'movie-trailer'

function List(props){

    const [items,setItems]=React.useState([]);
    const [trailer,setTrailer] = React.useState('');
    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get(props.fetchUrl);
            setItems(req.data.results);
            return req;
        }
        fetchData();
    },[props.fetchUrl]);

    const opts = {
        height:'400',
        width:'100%',
        playerVars:{autoplay:1}
    }

    function Trailer(name){
        if (trailer){
            setTrailer('');
        }
        else{
            movie_trailer(name || '').then(
                (url) =>{
                    const params = new URLSearchParams(new URL(url).search);
                    setTrailer(params.get('v'));
                }
            )
            .catch((error) => console.log(error));
        }


    }

    return <div className='ItemRow'>
        <h1>{props.title}</h1>
            <div className='items'>
            {items.map(item => <Card info={item} key={item.id} click={Trailer} />)}
            </div>
        <Youtube videoId={trailer} opts={opts} />
    </div>

}

export default List;