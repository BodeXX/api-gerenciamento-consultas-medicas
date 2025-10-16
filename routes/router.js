import { express } from "express"
import appointmenteController from "./controllers/appointmentController.js";
import doctorController from "./controllers/doctorController.js";
import pacientController from "./controllers/pacientController.js";
import prescriptionController from "./controllers/prescriptionController.js";



let router = express.router();


router.get(
    "/", function (req, res) {
        console.log("Oi!");
        res.status(200).json({ message: "Oi!"});
    }
);

router.use("/", appointmenteController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);




export default router;
