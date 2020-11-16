import React from 'react'

function Card (props){
    const posterPath = 'http://image.tmdb.org/t/p/w200'+props.info.poster_path;
    return <div className='ItemCard'>
     <img src={posterPath} alt={'name' in props.info ? props.info.name : props.info.title}></img>
    </div>
}

export default Card
//{'name' in item ? item.name : item.title}