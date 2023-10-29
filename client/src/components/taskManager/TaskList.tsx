import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../api/getAllTasks';
// import ListCard from './ListCard';
import './taskList.scss';
import { AppDispatch, RootState } from '../../slices/store';
import { currentUser } from '../../slices/authSlice';
import { initialTask } from '../../slices/taskSlice';
import ListCard from './ListCard';


// export type SingleTask = {
//   _id: string,
//   task: string,
//   status: string,
//   cretedBy: string,
// }


const TaskList = () => {
  const auth: currentUser | null = useSelector((state: RootState) => state.auth.currentUser);
  const tasks = useSelector((state: RootState) => state.task.AllTasks);


  // console.log(auth?.token);

  // const currentUser = auth.currentUser;
  // const AllTasks = tasks.AllTasks;

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {

    if (auth !== undefined && auth !== null) {
      dispatch(getAllTasks(auth.token, auth.id));
    }

  }, [dispatch, auth?.token, auth?.id]);

  return (
    <div>
      <ul className='list-header'>
        <li>
          <h5>Id</h5>
        </li>
        <li>
          <h5>Issue Name</h5>
        </li>
        <li>
          <h5>Status</h5>
        </li>
        <li>
          <h5>Action</h5>
        </li>
      </ul>
      {tasks.map((item: initialTask): JSX.Element => {


        return <ListCard key={item._id} item={item} />;

      })}
    </div>
  );
};

export default TaskList;