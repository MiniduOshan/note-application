import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/notes",(req,res)=>{
      res.send("Hello from the backend!");
      res.alert("hi");
      
});