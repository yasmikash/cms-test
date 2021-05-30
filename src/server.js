const App = require("./app");
const UserRoute = require("./routes/user.route");
const ResearchRoute = require("./routes/research.route");
const AdminRoute = require("./routes/admin.route");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = new App(process.env.NODE_ENV, process.env.PORT, [
  new UserRoute(),
  new ResearchRoute(),
  new AdminRoute(),
]);

app.listen();
