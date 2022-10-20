import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:3001/";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  return (
    <div>
      <table class="table table-hover table-bordered w-auto">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">My tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr>
              <th scope="row" key={task.id}>
                {task.id}
              </th>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
