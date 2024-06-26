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
            headers: {"Private-Key": "6e9fb3b3-6f27-47d5-b326-8e165833bf44"}
         }
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
     return res.status(e.status).json(e.response.data);
  }
});

app.listen(3001);