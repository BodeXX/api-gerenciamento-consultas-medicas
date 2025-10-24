import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";

let router = express.Router();

router.get('/prescriptions', async (req, res) => {
    try {
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        res.status(200).json(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching prescriptions", error: error.message });
    }
});

router.post('/prescriptions', async (req, res) => {
    try {
        const prescriptionData = req.body;
        const newPrescription = await PrescriptionService.savePrescription(prescriptionData);
        res.status(201).json(newPrescription);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating prescription", error: error.message });
    }
});

router.get('/prescriptions/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const prescription = await PrescriptionService.getPrescription(id);
        if (!prescription) {
            return res.status(404).json({ message: "Prescription not found" });
        }
        res.status(200).json(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching prescription", error: error.message });
    }
});

router.put('/prescriptions/:id', async (req, res) => {
    const {id} = req.params;
    const prescriptionData = req.body;
    try {
        const updatedPrescription = await PrescriptionService.updatePrescription(id, prescriptionData);
        if (!updatedPrescription) {
            return res.status(404).json({ message: "Prescription not found" });
        }
        res.status(200).json(updatedPrescription);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating prescription", error: error.message });
    }
});

router.delete('/prescriptions/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await PrescriptionService.deletePrescription(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting prescription", error: error.message });
    }
});


export default router;
