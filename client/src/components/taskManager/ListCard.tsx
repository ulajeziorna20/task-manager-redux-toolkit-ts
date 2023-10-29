/* eslint-disable react/prop-types */
import { arrowClick } from '../../api/arrowClickAPI';
import { deleteItem } from '../../api/deleteAPI';
import { AppDispatch } from '../../slices/store';
import { initialTask } from '../../slices/taskSlice';
// import { SingleTask } from './TaskList';
import './listcard.scss';
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { useDispatch } from 'react-redux';



type itemProps = {
  item: initialTask,
  key: string
}

const ListCard = (props: itemProps) => {

  const dispatch: AppDispatch = useDispatch();


  const handleArrows = (item: initialTask, string: string): void => {
    dispatch(arrowClick(item, string));
  };


  const handleDelete = (): void => {

    console.log('delete');
    
    dispatch(deleteItem(props.item._id));
  };




  return (
    <div>
      <ul className={` ${props.item.status === 'done' ? 'completed menu' : 'menu'}`}>
        <li>
          <p>{props.item._id}</p>
        </li>
        <li>
          <p>{props.item.task}</p>
        </li>
        <li>
          <p>{props.item.status}</p>
        </li>
        <li>
          action
          <button
            disabled={props.item.status === 'backlog'}
            onClick={() => handleArrows(props.item, 'left')}
          >
            <BiChevronLeft />
          </button>
          <button
            disabled={props.item.status === 'done'}
            onClick={() => handleArrows(props.item, 'right')}
          >
            <BiChevronRight />
          </button>
          <button onClick={handleDelete}>
            <BiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;