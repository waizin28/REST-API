import express from "express";
import bodyParser from "body-parser"; //take in incoming post body
import userRoutes from "./routes/user.js"; //user router

const app = express();
const PORT = 5030;

app.use(bodyParser.json()); //going to use JSON in application
app.use("/users", userRoutes);

//utilize nodemon to reboot the server whenever changes occur

app.get("/", (req, res) => {
  res.send("Hello from HomePage");
});

app.listen(PORT, () =>
  console.log(`Server Runnning on port: http://localhost:${PORT}`)
);
