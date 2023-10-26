import { useState } from 'react';
import './addTask.scss';
import { addTask } from '../../api/addTaskAPI';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../slices/store';



type State = {
  task: string
}



const AddTask = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.currentUser);
  // console.log(auth?.id!);



  const [state, setState] = useState<State>({
    task: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (auth?.id !== null && auth?.id !== undefined) {
      dispatch(addTask(state.task, auth?.id));
      setState({
        task: '',
      });
    }

  };

  return (
    <div>
      <div className='addtask'>
        <form action='' onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <input
            type='text'
            name='task'
            placeholder='add your task'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={state.task}
          />
          <button className='button'>Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;