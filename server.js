import { createServer } from "http";
import { app } from "./index.js";

const server = createServer(app);

server.listen(4488, () => {
  console.log("Server is running on port 4488");
});
