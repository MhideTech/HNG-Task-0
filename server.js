import express from "express";
import cors from "cors";
import { getCatFact } from "./apiService.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/me", async (req, res) => {
  try {
    const catFact = await getCatFact();
    console.log(catFact);
    res.type("application/json"); // Explicitly set Content-Type
    return res.status(200).send({
      status: "success",
      user: {
        email: "okefolahanolamide2006@gmail.com",
        name: "Okefolahan Olamide Israel",
        stack: "Node.js/Express.js",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
