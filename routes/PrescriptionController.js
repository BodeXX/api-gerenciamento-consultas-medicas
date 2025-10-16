import express from "express";
import prescriptionService from "../services/PrescriptionService";

let router = express.Router();

router.get('/', async (req, res) => {
    try {
        const prescription = await prescriptionService.getAllPrescriptions();
        res.json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.post('/newPrescription', async (req, res) => {
    try {
        const prescription = req.body;
        const newPrescription = await prescriptionService.savePrescription(prescription);
        res.status(201).json(newPrescription);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const prescription = await prescriptionService.getPrescription(id);
        res.json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const prescriptionData = req.body;
    try {
        const prescription = await prescriptionService.updatePrescription(id, pacientData);
        res.json(prescription);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const prescription = await prescriptionService.deletePrescription(id);
        res.json(prescription);
} catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


export default router;
