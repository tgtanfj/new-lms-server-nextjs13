import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNofitications, updateNofitication } from "../controller/notification.controller";
import { updateAccessToken } from "../controller/user.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getNofitications
);

notificationRoute.put(
  "/update-notification/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  updateNofitication
);

export default notificationRoute