"use client"

import { segregate } from '@/services/segregate';
import { Task } from '@/types';
import React, { useContext } from 'react'
import CardContainer from './CardContainer';
import { TaskContext } from '@/context/TaskContext';
import { mapOrdering } from '@/services/order';

const MainContent: React.FC = () => {
  const { groupBy, tasks, theme } = useContext(TaskContext);
  const grouped: Map<string, Task[]> = segregate(groupBy, tasks);
  const groupedArray: { key: string, tasks: Task[] }[] = mapOrdering(groupBy, grouped);

  return (
    <div  className={'flex flex-row gap-8 flex-wrap justify-center text-' + theme + '-text bg-' + theme + '-mainbg h-screen'}>
      {groupedArray.map((ele) => <CardContainer key={ele.key} tasks={ele.tasks} groupByValue={ele.key}/>)}
    </div>
  )
}

export default MainContent
