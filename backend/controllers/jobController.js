const db = require('../database/db');
const axios = require('axios');

exports.createJob = (req, res) => {
  const { taskName, payload, priority } = req.body;

  db.query(
    'INSERT INTO jobs (taskName, payload, priority, status) VALUES (?, ?, ?, ?)',
    [taskName, JSON.stringify(payload || {}), priority, 'pending'],
    () => res.json({ message: 'Job created' })
  );
};

exports.getJobs = (req, res) => {
  db.query('SELECT * FROM jobs', (err, result) => {
    res.json(result);
  });
};

exports.getJobById = (req, res) => {
  db.query(
    'SELECT * FROM jobs WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (!result || result.length === 0) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.json(result[0]);
    }
  );
};

exports.runJob = (req, res) => {
  const id = req.params.id;

  db.query('UPDATE jobs SET status="running" WHERE id=?', [id]);

  setTimeout(async () => {
    db.query(
      'UPDATE jobs SET status="completed", completedAt=NOW() WHERE id=?',
      [id]
    );

    if (process.env.WEBHOOK_URL) {
      try {
        await axios.post(process.env.WEBHOOK_URL, {
          jobId: id,
          status: 'completed'
        });
      } catch (e) {
        console.error('Webhook failed');
      }
    }
  }, 3000);

  res.json({ message: 'Job execution started' });
};
