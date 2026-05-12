const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.get('/pipeline-status', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.github.com/repos/Ashwinishree08/ci-cd-monitor/actions/runs',
      { headers: { Authorization: `token ghp_ABC123xyz...` } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch pipeline status' });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
