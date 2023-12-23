"use client"

import { Task, cardContainerProps } from '@/types'
import React, { useContext } from 'react'
import Card from './TaskCard'
import { ordering } from '@/services/order'
import { TaskContext } from '@/context/TaskContext'
import CardContainerHead from './CardContainerHead'

const CardContainer: React.FC<cardContainerProps> = (props: cardContainerProps) => {
    const { orderBy } = useContext(TaskContext);
    const orderedTasks: Task[] = ordering(orderBy, props.tasks);

    return (
        <div className='my-2 cardCont py-8'>
            <CardContainerHead groupByValue={props.groupByValue} taskLength={orderedTasks.length}/>
            <div className='flex flex-col gap-1 mt-8'>
                {orderedTasks.map((task) => <Card key={task.id} task={task} />)}
            </div>
        </div>
    )
}

export default CardContainer
