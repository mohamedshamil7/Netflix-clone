import React from 'react'

const Shimmer = () => {
  return (
    // <div className='w-full h-[550px]'>
        <div className=" shadow rounded-md p-4  w-full h-[550px] mx-auto">
  <div className="animate-pulse flex space-x-4">
    {/* <div class="rounded-full bg-slate-700 h-10 w-10"></div> */}
    <div className="flex-1 space-y-6 py-1">
      <div className="h-[550px] bg-slate-600 rounded"></div>
      {/* <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div> */}
    </div>
  </div>
</div>
    // </div>
  )
}

export default Shimmer