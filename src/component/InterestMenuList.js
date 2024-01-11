import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IMG_CON_URL } from '../constant'
import { Link } from 'react-router-dom'

const InterestMenuList = () => {

  const interestedMenu = useSelector(store => store?.restruantMenu?.restruantMenuList?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  return (
    interestedMenu?.map((element)=><div className='mr-2 pl-8 pt-8 pr-12 pb-14'>
      <Link to={element?.action?.link} key={element.id}><img src={IMG_CON_URL+element?.imageId} alt={element?.action?.text} className='flex object-fill'/></Link>
      <h1 className='p-4'>{element?.action?.text}</h1>
    </div>)
  )
}

export default InterestMenuList