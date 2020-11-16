import React from 'react';
import axios from './base.js'
import Card from './Card'

function List(props){

    const [items,setItems]=React.useState([]);
    React.useEffect(() => {
        async function fetchData(){
            const req = await axios.get(props.fetchUrl);
            setItems(req.data.results);
            return req;
        }
        fetchData();
    },[props.fetchUrl]);

    return <div className='ItemRow'>
        <h1>{props.title}</h1>
            {items.map(item => <Card info={item} key={item.id} />)}
    </div>

}

export default List;