import React from 'react';
import axios from './base.js'

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

    return <div>
        <h1>{props.title}</h1>
        <ul>
            {items.map(item => <li>{'name' in item ? item.name : item.title}</li>)}
        </ul>
    </div>

}

export default List;