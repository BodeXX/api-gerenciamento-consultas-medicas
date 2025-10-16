import { } from "express";
import { doctorService } from "services/DoctorService";



let router = express.Router();

router.post('/newDoctor', async (req, res) => {
    try {
        const doctorData = req.body;
        const newDoctor = await doctorService.saveDoctor(doctorData);
        res.status(201).json(newDoctor);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const doctor = await doctorService.getDoctor(id);
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const doctorData = req.body;
    try {
        const doctor = await doctorService.updateDoctor(id, doctorData);
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const doctor = await doctorService.deleteDoctor(id);
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});




export default router();
