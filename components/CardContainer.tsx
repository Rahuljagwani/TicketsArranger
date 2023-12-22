"use client"

import { Task, cardContainerProps } from '@/types'
import React, { useContext } from 'react'
import Card from './TaskCard'
import { ordering } from '@/services/order'
import { TaskContext } from '@/context/TaskContext'
import { Container } from '@mui/material'

const CardContainer: React.FC<cardContainerProps> = (props: cardContainerProps) => {
    const { orderBy, groupBy } = useContext(TaskContext);
    const orderedTasks: Task[] = ordering(orderBy, props.tasks);
    return (
        <div className='my-2 gap-5 w-80'>
            <h3>{groupBy.toLocaleUpperCase()}-{props.groupBy}</h3>
            <br></br>
            <div className='flex flex-col gap-1'>
                {orderedTasks.map((task) => <Card key={task.id} task={task} />)}
            </div>
        </div>

    )
}

export default CardContainer
