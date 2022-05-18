import express, { json } from "express";

const app = express();

app.use(json());

app.get("/pets", (req, res) => {
  res.send("all the pets i loved before");
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`listening in on port http://localhost:$(PORT)/pets`);
});

export default app;
