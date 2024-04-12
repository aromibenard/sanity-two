const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
         {
            username: username, 
            secret: username,
            first_name: username 
         },
         {
            headers: {"Private-Key": "7b4505f6-605b-4faf-bc91-1e8ca76d6294"}
         }
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
     return res.status(e.status).json(e.response.data);
  }
});

app.listen(3001);