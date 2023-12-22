"use client"

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Task, cardProps } from '@/types';
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ErrorIcon from '@mui/icons-material/Error';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RotateRightIcon from '@mui/icons-material/RotateRight';

const TaskCard: React.FC<cardProps> = ({ task }: cardProps) => {
  return (
    <Card className='cardMain mt-3 rounded-lg'>
      <CardContent className='p-3 flex flex-col gap-2'>
        <div className='cardTitle text-stone-400'>
          {task.id}
        </div>
        <div className='flex leading-4 gap-2'>
          <div>
            {task.status === "Todo" ? <CircleOutlinedIcon className='size-4'/> : ''}
            {task.status === "In progress" ? <TrackChangesIcon className='size-4' /> : ''}
            {task.status === "Backlog" ? <RotateRightIcon className='size-4'/> : ''}
          </div>
          {task.title}
        </div>
        <div className='flex leading-4 gap-1 text-stone-400'>
          <div className='border'>
            {task.priority === 0 ? <MoreHorizIcon className='size-4' /> : ''}
            {task.priority === 1 ? <SignalCellularAlt1BarIcon className='size-4' /> : ''}
            {task.priority === 2 ? <SignalCellularAlt2BarIcon className='size-4' /> : ''}
            {task.priority === 3 ? <SignalCellularAltIcon className='size-4' /> : ''}
            {task.priority === 4 ? <ErrorIcon  className='text-amber-500 size-4' /> : ''}
          </div>
          <div className='leading-4 border text-sm'>
            <FiberManualRecordIcon className='size-3' />
            &nbsp;{task.tag.join(', ')}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
