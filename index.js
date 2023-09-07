const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors(
  //   {
  //   origin: ["https://nitinkumar2905.vercel.app"],
  //   methods: ["POST", "DELETE", "GET"],
  //   credentials: true,
  // }
));

// app.get("/", (req,res)=>{
//   res.json("hello")
// })

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Inotes running at http://localhost:${port}`);
});
