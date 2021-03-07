import Search from './component/Search';
import Box from './component/Box';
import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const[search,setSearch] = useState('');
  const[array,setArray] = useState([]);

  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => setArray (res.data)).catch(err => console.log(err)) 
}, [])
const filterRobots = array.filter((robot) =>
robot.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="App">
      <h1>ROBO FRIENDS</h1>
      <Search value={search} setSearch={setSearch}/>
      <div><Box array={filterRobots}/></div>
    </div>
  );
}

export default App;
