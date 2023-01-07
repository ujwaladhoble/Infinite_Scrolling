import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Datadisplay from './Datadisplay';
import Loader from './Loader';

const Infinite = () => {
    const [items, setItems] = useState([])
    const[noMore,setNomore]=useState(true)
    const[page,setPage]=useState(2);
     const listInnerRef = useRef();

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=10')
            const data = await response.json()
            setItems(data.data)
        }
        getComments()
    }, [])
   

    const fetchComments = async () => {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=20`)
        const data = await response.json()
       return data.data
    }


    const fetchData = async() => {
       const commentsFRomrServer=await fetchComments();
       setItems([...items,...commentsFRomrServer]);
      

       if(commentsFRomrServer.length==0 || commentsFRomrServer.length<10){
        setNomore(false);
       }
       setPage(page+1)
    }
    console.log(items)
    return (
        <div>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={noMore}
                ref={listInnerRef}
                loader={<Loader/>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Datadisplay items={items}/>
                
            </InfiniteScroll>

        </div>
    )
}

export default Infinite
