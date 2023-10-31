import * as React from 'react';
import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import './dashboard.scss'
import { AppDispatch, RootState } from "../../slices/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from '../../api/getAllTasks';
import { initialTask } from '../../slices/taskSlice';

const Dashboard = () => {

  const dispatch: AppDispatch = useDispatch();


  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const tasklist = useSelector((state: RootState) => state.task.AllTasks);



  let pendingTaskVar: initialTask[] = []
  let completedTaskVar: initialTask[] = []

  for (let i = 0; i < tasklist.length; i++) {

    if (tasklist[i].status === 'todo') {

      pendingTaskVar.push(pendingTaskVar[i]);
    } else if (tasklist[i].status === 'done') {
      completedTaskVar.push(completedTaskVar[i]);
    }


  }

  console.log("tyle ma pending " + pendingTaskVar.length);



  console.log(tasklist.length);


  console.log('jestem drugi');





  useEffect(() => {
    console.log('jestem UE');

    const fetchTasks = async () => {
      if (currentUser?.token !== undefined && currentUser?.token !== null) {
        await dispatch(getAllTasks(currentUser.token, currentUser.id));
        // Tutaj możesz być pewien, że zadania zostały pobrane przed użyciem useSelector
        console.log('Zadania zostały pobrane')

      }
    };

    fetchTasks();

  }, [currentUser?.token, currentUser?.id, dispatch]);



  return (
    <div className="dashboard">
      <div className="dashboard_left">
        <Sidebar />
      </div>
      <div className="dashboard_right">
        <div className="dashboard_rightContent">
          <h2>Task Status Dashboard</h2>
          <div className='taskcount'>

            <div className='todo box'>Todo - {pendingTaskVar.length}</div>
            <div className='done box'>Complete - {completedTaskVar.length}</div>
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