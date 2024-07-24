import express from "express";
import router_modul  from "./route";

const app = express();

const PORT = 3000;

app.use(router_modul);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
