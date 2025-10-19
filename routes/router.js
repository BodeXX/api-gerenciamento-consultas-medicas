import  express  from "express";
import AppointmentController from "./AppointmentController.js";
import DoctorController from "./DoctorController.js";
import PacientController from "./PacientController.js";
import PrescriptionController from "./PrescriptionController.js";



let router = express.Router();


router.get("/", function (req, res) {
        console.log("Oi!");
        res.status(200).json({ message: "Oi!"});
    });

router.use("/", AppointmentController);
router.use("/", DoctorController);
router.use("/", PacientController);
router.use("/", PrescriptionController);


export default router;
