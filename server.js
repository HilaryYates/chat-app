import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname)));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
