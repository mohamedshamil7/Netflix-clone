
import React, { useRef, useCallback, }   from 'react'
import { useState } from "react"
import GenereMovies from './GenereMovies'
import useCards from '../utils/useCards'


const Sorted = () => {
    const [pagenum,setPagenum] = useState(1)
    const [movies,setMovies] = useState([])
    // useEffect(()=>{
    //     axios.get(`${requests.genere}&page=1`).then((response)=>{
    //         setMovies(response.data.results)
    //     })
    // },[])

    const{
        isLoading,
        isError,
        error,
        results,
        hasNextPage
    }= useCards(pagenum)

    const  intObserver = useRef()
    console.log("enteeresf");
    const lastPostRef =useCallback (post=>{
        if(isLoading) return 
        
        if(intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver(posts=>{
            console.log("enteeres");
            console.log(posts[0]);
            if(posts[0].isIntersecting && hasNextPage){
                console.log("near oisdfjoasfnj alst");
                setPagenum(prev=> prev+1)
            }
        })
        if(post)intObserver.current?.observe(post)
    },[isLoading,hasNextPage])

    if(isError) {return <p className='center'>Error: {error.message}</p>}



   
    console.log(results);
    let content = results.map((post,i)=>{
        console.log(typeof post);
     if  ( results.length ===i+1 ){
        console.log("last");
      return  <GenereMovies ref={lastPostRef} key={post.id} item={post}/>
        }
        return <GenereMovies key={post.id} item={post}/>
    })

    return(
        <div id={'slider'} className='w-full h0full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-wrap'>
       {content}
        {isLoading && (<p>Loading more posts</p>)}
    </div>
    )
   
}

export default Sorted