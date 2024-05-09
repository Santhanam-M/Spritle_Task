import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Components/Form";
import Table from "./Components/Table";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles.css'

function App() {

  const [monitorData, setMonitorData] = useState([])

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/proxy')
            console.log(response.data)
            setMonitorData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

  //callback function to update state
  const updateMonitor = (data)=>{
    setMonitorData([...monitorData, data])
  }

  return (
    <div className="mt-3 text-center">
      <h4 className="fw-bold">Data Monitoring App</h4>
      <Table monitorData={monitorData}/>
      <Form updateMonitor={updateMonitor}/>
    </div>
  );
}

export default App;