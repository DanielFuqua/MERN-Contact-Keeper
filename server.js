// Without bringing in babel or something like that you can't use 'import' syntax. You use this instead...
const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper API..." })
);

// Defin Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
