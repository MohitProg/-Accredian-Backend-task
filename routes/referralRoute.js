import { Router } from "express";
import { SendReferral } from "../controller/referralController.js";


const route =Router();

route.post("/add/referral",SendReferral);




export default route;