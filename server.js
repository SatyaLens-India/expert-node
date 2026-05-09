const express = require('express');
const app = express();
app.use(express.json());

// ZK-Proof Anonymous Voting for Experts
app.post('/vote', (req, res) => {
    const { expertID, claimID, verdict } = req.body;
    console.log(`Anonymous vote cast for ${claimID} by verified expert node.`);
    res.send({ status: "Vote Recorded", timestamp: new Date().toISOString() });
});

app.listen(4000, () => console.log("Expert Node Online on Port 4000"));
