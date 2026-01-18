import { logs } from "../data/logs";
const Logs =()=>{
 const highCarbonLogs = logs.filter(log => log.carbon > 4);
 return(<div>
    <h2>High Carbon Activities (&gt; 4 Kgs)</h2>
      <ul>
        {highCarbonLogs.map(log => (
          <li key={log.id}>
            {log.activity} = {log.carbon} Kgs
          </li>
        ))}
      </ul>
      </div>

 )
}
export default Logs;