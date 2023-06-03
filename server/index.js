import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/AuthRouters.js";

dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store)
const store=new sessionStore({
  db:db
})

app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    store:store,
    saveUninitialized: true,
    cookie: {
      secure: "auto"
    },
  })
);

app.use(userRouter);
app.use(productRouter);
app.use(authRouter)

app.listen(process.env.PORT, () => {
  console.log("server runing");
});
