// Standart Library
import express from "express";
import path from "path"


// Routes
import mainRoutes from "./backend/routes/main.js";
import quizzRoutes from "./backend/routes/quizz.js"
import connexionRoutes from "./backend/routes/connexion.js"


// Specific Imports
import { dirname } from "path";
import { fileURLToPath } from "url";



// Constants
const __dirname = dirname(fileURLToPath(import.meta.url));



// -- -- -- -- -- -- -- -- --  -- CONFIG -- -- -- -- -- -- -- -- --  -- \\
const app = express();
app.use("/static", express.static(path.join(__dirname, "/frontend/assets")));


app.set("view engine", "ejs");
app.set("views", "./frontend/views");





// -- -- -- -- -- -- -- -- --  -- Routes -- -- -- -- -- -- -- -- --  -- \\
app.use('/connexion', connexionRoutes);
app.use('/quizz', quizzRoutes);



//app.use("/",mainRoutes)


app.get("/", (req, res) => {
  res.status(200).render("pages/home.ejs");
});



// Start the server
//app.listen(process.env.PORT, () => console.log(`Server started on http://localhost:${process.env.PORT}`));
app.listen(5001);