const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
require("./initDb"); // Inicializa tabla users

const app = express();
app.use(cors({
  origin: "https://nuevojam-c3219.web.app/" // reemplaza con tu URL de Firebase
}));

app.use(express.json());

// Rutas
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Servidor en http://localhost:${PORT}`));
