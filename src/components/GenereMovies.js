import React, { forwardRef } from 'react'

const GenereMovies = forwardRef(({item},ref) => {
    console.log(item);

    const cardBody = (
        <>
         <div className='w-[160px] sm:w[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
          <div className='w-[160px] sm:w[200px] md:w-[240px] lg:w-[280px] p-2   shadow-md'>
            {/* <h2 className='text-white'>{item.id}</h2> */}
        <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}/>
       
    </div>
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        {

        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>

          
        }
     
      </div>
    </div>
        </>
    )
        const content = ref ? <article ref={ref}>{cardBody}</article>: <article>{cardBody}</article>

    return content
})

export default GenereMovies