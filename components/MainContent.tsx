"use client"

import { segregate } from '@/services/segregate';
import { Task } from '@/types';
import React, { useContext } from 'react'
import CardContainer from './CardContainer';
import { TaskContext } from '@/context/TaskContext';

const MainContent: React.FC = () => {
  const { groupBy, tasks } = useContext(TaskContext);
  const grouped: Map<keyof Task, Task[]> = segregate(groupBy, tasks);
  const groupedArray: { key: keyof Task, tasks: Task[] }[] = Array.from(grouped.entries()).map(([key, tasks]) => ({ key, tasks }));
  return (
    <div className='flex flex-row gap-8 flex-wrap justify-center'>
      {groupedArray.map((ele) => <CardContainer key={ele.key} tasks={ele.tasks} groupBy={ele.key}/>)}
    </div>
  )
}

export default MainContent
