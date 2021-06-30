import { Router } from "express";
import user from "../modules/user/routes";
export default () => {
  const app = Router();
  user(app);

  return app;
};
