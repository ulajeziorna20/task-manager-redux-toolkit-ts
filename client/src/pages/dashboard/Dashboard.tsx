import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_left">
        <Sidebar />
      </div>
      <div className="dashboard_right">
        <div className="dashboard_rightContent">
          <h2>Task Status Dashboard</h2>
          <div className="taskCount">
            <div className="todo box">Todo</div>
            <div className="doing box">Doing</div>
            <div className="done box">Done </div>
          </div>
          <div className="createButton">
            <Link to='/taskmanager' className="button">Create Task</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;