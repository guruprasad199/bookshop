import axios from 'axios'
import React, {useState,  useEffect} from 'react'

function Render() {
    const [lists, setLists] = useState([])

    useEffect(() => {

        axios.get("https://www.googleapis.com/books/v1/volumes?q=javascript").then((resp) => setLists(resp.data.items))
       


    }, [])
    return (
        <div>

        {lists.map((item, id) => (
            <div>
            {item.volumeInfo.title}
            </div>
        ))}
            
        </div>
    )
}

export default Render
