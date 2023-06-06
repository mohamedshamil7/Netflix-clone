import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


const Row = ({title,fetchUrl,rowId}) => {
    const [movies,setMovies] = useState([])
   


    useEffect(()=>{
        if(!fetchUrl) return
        axios.get(fetchUrl).then((response)=>{
            setMovies(response?.data.results)
        })
    },[fetchUrl])
    const slideLeft=()=>{
        var slider = document.getElementById('slider'+rowId)
        slider.scrollLeft = slider.scrollLeft -500
    }
    const slideRight=()=>{
        var slider = document.getElementById('slider'+rowId)
        slider.scrollLeft = slider.scrollLeft +500
    }
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    <div id={'slider'+rowId} className='w-full h0full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {movies.map((item)=>(
            <Movie key={item.id} item={item}/>
        ))}
    </div>
    <MdChevronRight onClick={(slideRight)} className='bg-white right-0 rounded-full absolute opacity-50 cursor-pointer z-10 hidden group-hover:block' size={40} />
    </div>

    </>
  )
}

export default Row