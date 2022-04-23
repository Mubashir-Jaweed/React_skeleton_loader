import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Card = ({value}) => {
  return (
    <div className='card'>
      <h4>{ <Skeleton />}</h4>
      <code>{ <Skeleton />}</code>
      <br/>
      <span>{ <Skeleton height={150}/>}</span>
    </div>
  )
}

export default Card

