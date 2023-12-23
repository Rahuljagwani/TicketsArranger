import { TaskContext } from '@/context/TaskContext'
import { IconValue } from '@/types';
import React, { useContext } from 'react'
import SignalCellularAlt1BarIcon from '@mui/icons-material/SignalCellularAlt1Bar';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ErrorIcon from '@mui/icons-material/Error';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import LinearScaleIcon from '@mui/icons-material/LinearScale';

const CardContainerHead: React.FC<IconValue> = ({ groupByValue, taskLength }: IconValue) => {
  const { groupBy, users } = useContext(TaskContext);
  const priorityMap: string[] = ["No Priority", "Low", "Medium", "High", "Urgent"];
  const priorityIcon = [
      <MoreHorizIcon className='size-4' />,
      <SignalCellularAlt1BarIcon className='size-4' />,
      <SignalCellularAlt2BarIcon className='size-4' />,
      <SignalCellularAltIcon className='size-4' />,
      <ErrorIcon className='size-4 text-amber-500' />
  ];

  const statusIcon: { [key: string]: React.JSX.Element } = {
      "Backlog": <RotateRightIcon className='size-4' />,
      "In progress": <TrackChangesIcon className='size-4 text-yellow-300' />,
      "Todo": <CircleOutlinedIcon className='size-4' />,
      "Done": <CheckCircleIcon className='size-4 text-cyan-800'/>,
      "Cancelled": <CancelIcon className='size-4 text-slate-300'/>
  };
  return (
    <span className='text-base flex px-4 items-end'>
      {groupBy == "priority" ?
        <span className='leading-4 flex items-end'>
          {priorityIcon[Number(groupByValue)]}&nbsp;&nbsp;
          {priorityMap[Number(groupByValue)]}&nbsp;&nbsp;
          {taskLength}
        </span>
        : ''
      }
      {groupBy == "userId" ?
        <span className='leading-4 flex items-end'>
          {users.find(user => user.id === groupByValue)?.name}&nbsp;&nbsp;
          {taskLength}
        </span>
        : ''
      }
      {groupBy == "status" ?
        <span className='leading-4 flex items-end'>
          {statusIcon[groupByValue]}&nbsp;&nbsp;
          {groupByValue}&nbsp;&nbsp;
          {taskLength}
        </span>
        : ''
      }
      <div className='grow' />
      <span>
        <AddIcon className='size-4'/>
        &nbsp;
        <LinearScaleIcon className='size-4'/>
      </span>
    </span>
  )
}

export default CardContainerHead
