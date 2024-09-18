import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./modules/user/user.route";
import { AuthRoutes } from "./modules/auth/auth.route";
import { CarRoutes } from "./modules/car/car.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// application routes
app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api", CarRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome Go Rent Server!");
});

export default app;
