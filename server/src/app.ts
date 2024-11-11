import app from "@server/server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server corriendo en el puerto 3001");
});
