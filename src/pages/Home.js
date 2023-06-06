import React  from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../config/REquest'
import { useSelector } from 'react-redux'
import Sorted from '../components/Sorted'

const Home = () => {
  
  const {showall} = useSelector((store)=> store.generes)
  console.log("fnsalkdf");
  return (

      <div className='bg-[#0b0b0b]'> 
    <Main/>
    {!showall ? (
      <>
        <Row rowId={1} title="Up Coming" fetchUrl={requests.requestUpcoming}/>
        <Row rowId={2} title="Popular" fetchUrl={requests.requestPopular}/>
        <Row rowId={3} title="Top Rated" fetchUrl={requests.requestTopRated}/>
        <Row rowId={4} title="Trending" fetchUrl={requests.requestTrending}/>
      </>
    ):(<Sorted/>)
    }

    
    </div>


    
  )
}

export default Home