import  express  from "express";
import AppointmentController from "./AppointmentController.js";
import DoctorController from "./DoctorController.js";
import PacientController from "./PacientController.js";
import PrescriptionController from "./PrescriptionController.js";
import doctorService from "../services/DoctorService.js";
import bcrypt from 'bcrypt';
import verifyToken from "../middleware/authMiddleware.js";



let router = express.Router();


router.get("/", function (req, res) {
        console.log("Oi!");
        res.status(200).json({ message: "Oi!"});
    });

// mapeamento do login
router.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        const doctor = await doctorService.getDoctorByLogin(login);
        if (!doctor) {
            return res.status(401).json({error: 'Authentication failed!'});
        }

        const passwordMatch = await bcrypt.compare(password, doctor.password);
        if (!passwordMatch) {
            return res.status(401).json({error: 'Authentication failed!'});
        }

        const token = JsonWebTokenError.sign({doctorid: doctor._id}, 'you-secret-key', {
            expiresIn: '1h',
        });
        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Login failed!'});
    }
});


router.use("/", verifyToken, AppointmentController);
router.use("/", verifyToken, DoctorController);
router.use("/", verifyToken, PacientController);
router.use("/", verifyToken, PrescriptionController);


export default router;
