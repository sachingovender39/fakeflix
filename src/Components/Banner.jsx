import React from 'react';
import axios from './base';
import Button from 'react-bootstrap/Button';
function Banner(props){
    const [item,setItem]=React.useState([]);
    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get(props.url);
            setItem(req.data.results[Math.floor(Math.random() * req.data.results.length -1)]);
            return req;
        }
        fetchData();
    },[props.url])
    console.log(item);
    const backdrop = 'https://image.tmdb.org/t/p/original/'+item.backdrop_path;
    console.log(backdrop);
    const link ='url("'+backdrop+'")';
    console.log(link)
    return <header className='banner' style={{//backgroundSize:'cover',backgroundImage:{link},backgroundPosition:'center center'
    backgroundImage:'url("http://image.tmdb.org/t/p/original//ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg")',
    backgroundSize:'cover',
    backgroundPosition:'center center'
}}>
        <div className='bannerContent'>
        <h1 className='bannerTitle'>{item?.title || item?.name || item?.original_name}</h1>
        <div className='bannner_btn_section'> 
        <Button className='banner_btn' variant='light' size='lg'><i class="fas fa-play"></i> Play</Button>
        <Button className='banner_btn' variant='secondary' size='lg' style={{opacity:0.8}}><i class="fas fa-info-circle"></i> More Info</Button>  
        </div>
        <span className='bannerDetails'>{item.overview}</span>
        </div>
        <div className='gradient'>

        </div>

    </header>

}

export default Banner;
//http://image.tmdb.org/t/p/original//ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg