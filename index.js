const express = require(`express`)
const app = express()
const PORT = process.env.PORT || 2222
const cors = require("cors");
require(`./config/db`);
const userRouter = require(`./router/user.router`)

app.use(cors());
app.use(express.json())
app.get(`/users`, (req, res) => {
    res.status(200).json({
        message: `Server is up and running`,
    });
});

app.use(`/user`, userRouter);
app.listen(PORT, () => {
    console.log(`Server is up on PORT: ${PORT}`)
})
