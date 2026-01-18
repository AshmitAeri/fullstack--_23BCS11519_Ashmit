import Header from "./components/header";
import Logs from "./pages/logs"; 
import Dashboard from "./pages/dashboard";
const App =()=>{
  return(
    <>
    <Header title="Ecotrack"></Header>
    <Dashboard/>
    <Logs/>
    </>
  )
}
export default App;