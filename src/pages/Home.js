import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../REquest'

const Home = () => {
  return (
    <div className='bg-[#0b0b0b]'> 
    <Main/>
    <Row rowId={1} title="Up Coming" fetchUrl={requests.requestUpcoming}/>
    <Row rowId={2} title="Popular" fetchUrl={requests.requestPopular}/>
    <Row rowId={3} title="Top Rated" fetchUrl={requests.requestTopRated}/>
    <Row rowId={4} title="Trending" fetchUrl={requests.requestTrending}/>
    </div>
  )
}

export default Home