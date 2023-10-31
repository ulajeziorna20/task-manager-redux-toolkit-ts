import * as React from 'react';
import { useState } from 'react';

/* eslint-disable react/prop-types */
import { arrowClick } from '../../api/arrowClickAPI';
import { deleteItem } from '../../api/deleteAPI';
import { AppDispatch } from '../../slices/store';
import { initialTask } from '../../slices/taskSlice';
// import { SingleTask } from './TaskList';
import './listcard.scss';
import { BiChevronLeft, BiChevronRight, BiTrash, BiEditAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import EditTask from './EditTask';
import { editTaskAPI } from '../../api/editiTaskAPI';



type itemProps = {
  item: initialTask,
  key: string
}

const ListCard = (props: itemProps) => {

  const dispatch: AppDispatch = useDispatch();

  const [editContent, setEditContent] = useState<string>("");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);


  const handleArrows = (item: initialTask, string: string): void => {
    dispatch(arrowClick(item, string));
  };


  const handleDelete = (): void => {

    console.log('delete');

    dispatch(deleteItem(props.item._id));
  };


  const editTask = (e: React.FormEvent<HTMLFormElement>, content: string, id: string) => {

    e.preventDefault()
    dispatch(editTaskAPI(content, id))
    // console.log(content);

  }



  return (
    <div>
      <ul className={` ${props.item.status === 'done' ? 'completed menu' : 'menu'}`}>
        <li className='taskContent'>
          <p>{props.item.task}</p>
        </li>
        <li className='edit'>
          <button onClick={() => setShowEditModal(true)}>
            <BiEditAlt />
          </button>
        </li>
        <li className='status'>
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

      {showEditModal ? <div className="editBackground"></div> : ''}
      {showEditModal ? <EditTask setShowEditModal={setShowEditModal} editTask={editTask} setEditContent={setEditContent} editContent={editContent} item={props.item} /> : ''}

    </div>
  );
};

export default ListCard;