import React  from 'react'
import { useDispatch } from 'react-redux'
import { showAll } from '../utils/genereSlice'


const Selector = () => {
    const dispatch = useDispatch()
const setShowAll= ()=>{
    dispatch(showAll())
}


  return (
<div className="w-72 font-medium pt-5">
       <div onClick={()=> setShowAll()} className="bg-white w-full p-2 flex items-center justify-center rounded">Show All Movies </div>
      
      </div>
  )
}

export default Selector