import React, { useState } from "react";

import Container from "react-bootstrap/Container";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "" || deadline === "") {
      alert("Please enter a task and select a valid deadline.");
      return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("Please select a future date for the deadline.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      task,
      priority,
      deadline,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setPriority("top");
    setDeadline("");
  };

  const markDone = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);

    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const upcomingTasks = tasks.filter((t) => !t.done);

  return (
    <Container className="App" style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: '#f0f0f0', margin: 0, padding: 0, color: '#333' }}>
      <header className="h" style={{ backgroundColor: 'white', color: 'green', textAlign: 'center', padding: '1rem 0', boxShadow: '0 4px 18px lightgray' }}>
        <h1>Task Scheduler</h1>
      </header>
      <main className="m" style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 18px lightgrey' }}>
        <div className="task-form" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            id="task"
            placeholder="Please Enter Task"
            value={task}
            onChange={handleTaskChange}
            style={{ padding: '10px', border: '1px solid #ccc', fontSize: '16px', flex: 1, borderRadius: '10px' }}
          />
          <select
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
            style={{ padding: '10px', border: '1px solid #ccc', fontSize: '16px', flex: 1, borderRadius: '10px' }}
          >
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            style={{ padding: '10px', border: '1px solid #ccc', fontSize: '16px', flex: 1, borderRadius: '10px' }}
          />
          <button id="add-task" onClick={addTask} style={{ backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
            Add Task
          </button>
        </div>
        <h2 className="heading" style={{ paddingBottom: '10px' }}>Upcoming Tasks</h2>
        <div className="task-list" id="task-list" style={{ border: '1px solid #ddd', padding: '10px' }}>
          <table style={{ width: '100%', marginTop: '20px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
            <thead>
              <tr>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Task Name</th>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Priority</th>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Deadline</th>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTasks.map((t) => (
                <tr key={t.id}>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>{t.task}</td>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>{t.priority}</td>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>{t.deadline}</td>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>
                    {!t.done && (
                      <button
                        className="mark-done"
                        onClick={() => markDone(t.id)}
                        style={{ padding: '10px', fontSize: '16px', flex: 1, borderRadius: '15px', backgroundColor: 'crimson', color: 'white', border: 'none', cursor: 'pointer' }}
                      >
                        Mark Done
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="completed-task-list" style={{ marginTop: '20px' }}>
          <h2 className="cheading" style={{ color: 'rgb(54, 54, 54)' }}>Completed Tasks</h2>
          <table style={{ width: '100%', marginTop: '20px', backgroundColor: '#fff', border: '1px solid #ddd' }}>
            <thead>
              <tr>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Task Name</th>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Priority</th>
                <th style={{ padding: '19px', borderBottom: '1px solid #ddd', backgroundColor: '#eee', color: 'black', borderRadius: '10px' }}>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((ct) => (
                <tr key={ct.id}>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>{ct.task}</td>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>{ct.priority}</td>
                  <td style={{ padding: '19px', borderBottom: '1px solid #ddd' }}>{ct.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
}

export default Todo;

// Future plans with this app:
// 1. Color code task priorities
// 2. CSS polishing up
// 3. Make completed tasks disappear
