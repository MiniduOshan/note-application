import express from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

