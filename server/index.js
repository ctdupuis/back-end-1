const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


const PORT = 4000

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends)
});


app.get("/weather/:temp", (req, res) => {
    const { temp } = req.params;
    const phrase = `<h3>It was ${temp} today</h3>`
    res.status(200).send(phrase);
})




app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));