import { logs } from "../data/logs";

const Dashboard = () => {
  const totalCarbon=logs.reduce((sum,log)=>sum+log.carbon,0)
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Total Carbon Footprint: {totalCarbon}Kgs</h2>
      <ul>
        {logs.map(log=>(
            <li key={log.id}> {log.activity} = {log.carbon}kgs </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;