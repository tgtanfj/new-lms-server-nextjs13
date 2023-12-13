import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNofitications, updateNofitication } from "../controller/notification.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizeRoles("admin"),
  getNofitications
);

notificationRoute.put(
  "/  /:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateNofitication
);

export default notificationRoute