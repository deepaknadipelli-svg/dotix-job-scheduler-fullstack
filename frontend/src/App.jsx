import { useEffect, useState } from 'react';
import { getJobs, createJob, runJob } from './services/api';

function App() {
  const [jobs, setJobs] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const fetchJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const submitJob = async () => {
    await createJob({ taskName, priority, payload: {} });
    setTaskName('');
    fetchJobs();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dotix Job Scheduler</h2>

      <input
        placeholder="Task name"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />

      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={submitJob}>Create Job</button>

      <hr />

      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.taskName} - {job.status}
            {job.status === 'pending' && (
              <button onClick={() => runJob(job.id)}>Run</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
