// fetch tasks from API using axios and display in list
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 function TaskList() {
  const [tasks, setTasks] = useState([]);
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            setTasks(response.data);
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        }); 
}, []);
    return (
    <div>
        <h1>Task List</h1>

        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    </div>
);
}




















