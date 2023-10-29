import * as React from 'react';
import { useEffect } from 'react';

import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import './dashboard.scss'
import { AppDispatch, RootState } from "../../slices/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from '../../api/getAllTasks';

const Dashboard = () => {

  // console.log('montuje');
  

  const tasklist = useSelector((state: RootState) => state.task.AllTasks);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);


  let pendingTask = [];
  let completedTask = [];

  // console.log(tasklist.length);
  


  for (let i= 0; i < tasklist.length; i++) {


    console.log(tasklist[i].status)
    
    if (tasklist[i].status === 'todo') {


      pendingTask.push(tasklist[i]);
    } else if (tasklist[i].status === 'done') {
      completedTask.push(tasklist[i]);
    }

    // window.location.reload()
  }


  const dispatch: AppDispatch = useDispatch();


  // useEffect(() => {

  //   // console.log(tasklist);
    

  //   if (currentUser !== undefined && currentUser !== null) {

  //     dispatch(getAllTasks(currentUser.token, currentUser.id));
  //   }


  // }, [dispatch, currentUser?.token, currentUser?.id]);




  return (
    <div className="dashboard">
      <div className="dashboard_left">
        <Sidebar />
      </div>
      <div className="dashboard_right">
        <div className="dashboard_rightContent">
          <h2>Task Status Dashboard</h2>
          <div className='taskcount'>
            <div className='todo box'>Todo - {pendingTask.length}</div>
            <div className='done box'>Complete - {completedTask.length}</div>
          </div>
          <div className="createButton">
            <Link to='/taskmanager' className="button">Task List and create</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;