import React from 'react'
import InterestMenuList from './InterestMenuList'

const InterestMenu = () => {
  return (
    <div>
        <h1 className='px-16 py-4 font-bold text-2xl'>What's on your mind?</h1>
        <div className='flex px-16 py-4 gap-24 overflow-x-scroll no-scrollbar'>
          <InterestMenuList />
        </div>
        
    </div>
  )
}

export default InterestMenu