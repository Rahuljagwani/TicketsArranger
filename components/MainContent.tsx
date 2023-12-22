import { useTask } from '@/context/TaskContext'
import { segregate } from '@/services/segregate';
import { Task } from '@/types';
import React from 'react'
import CardContainer from './CardContainer';

const MainContent = () => {
  const { groupBy, tasks } = useTask();
  const grouped: Map<string, Task[]> = segregate(groupBy, tasks);
  const array = Array.from(grouped);
  return (
    <>
    {array.map((group: [string, Task[]]) => {
      <CardContainer key={group[0]} tasks={group[1]} />
    })}
    </>
  )
}

export default MainContent
