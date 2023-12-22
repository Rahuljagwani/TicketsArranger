import { Task, cardProps } from '@/types'
import React from 'react'
import Card from './Card'
const CardContainer: React.FC<cardProps> = (props: cardProps) => {


  return (
    <div>
    {props.tasks.map((task) => <Card />)}
    </div>
    
  )
}

export default CardContainer
