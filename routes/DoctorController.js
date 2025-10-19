import express from "express";
import  DoctorService  from "../services/DoctorService.js";



let router = express.Router();

router.post('/doctors', async (req, res) => {
    try {
        const doctorData = req.body;
        const newDoctor = await DoctorService.saveDoctor(doctorData);
        res.status(201).json(newDoctor);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating doctor", error: error.message });
    }
});

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching doctors", error: error.message });
    }
});

router.get('/doctors/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const doctor = await DoctorService.getDoctor(id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching doctor", error: error.message });
    }
});

router.put('/doctors/:id', async (req, res) => {
    const {id} = req.params;
    const doctorData = req.body;
    try {
        const updatedDoctor = await DoctorService.updateDoctor(id, doctorData);
        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json(updatedDoctor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating doctor", error: error.message });
    }
});

router.delete('/doctors/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await DoctorService.deleteDoctor(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting doctor", error: error.message });
    }
});



export default router;
