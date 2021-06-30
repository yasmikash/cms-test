const App = require("./app");
const UserRoute = require("./routes/user.route");
const ResearchRoute = require("./routes/research.route");
const AdminRoute = require("./routes/admin.route");
const WorkshopRoute = require("./routes/workshop.route");
const ResearchNoticeRoute = require("./routes/research-notice.route");
const WorkshopNoticeRoute = require("./routes/workshop-notice.route");
const UserPaymentRoute = require("./routes/user-payment.route");
const KeynotePaymentRoute = require("./routes/keynote.route");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = new App(process.env.NODE_ENV, process.env.PORT, [
  new UserRoute(),
  new ResearchRoute(),
  new AdminRoute(),
  new WorkshopRoute(),
  new ResearchNoticeRoute(),
  new WorkshopNoticeRoute(),
  new UserPaymentRoute(),
  new KeynotePaymentRoute(),
]);

app.listen();
