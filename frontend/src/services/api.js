const BASE_URL = 'http://localhost:5000';

export const getJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs`);
  return res.json();
};

export const createJob = async (job) => {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job)
  });
  return res.json();
};

export const runJob = async (id) => {
  const res = await fetch(`${BASE_URL}/jobs/run/${id}`, {
    method: 'POST'
  });
  return res.json();
};
