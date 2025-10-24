import express from "express";
import PacientService from "../services/PacientService.js";

let router = express.Router();

router.post('/pacients', async (req, res) => {
    try {
        const pacientData = req.body;
        const newPacient = await PacientService.savePacient(pacientData);
        res.status(201).json(newPacient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating pacient", error: error.message });
    }
});

router.get('/pacients', async (req, res) => {
    try {
        const pacients = await PacientService.getAllPacients();
        res.status(200).json(pacients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching pacients", error: error.message });
    }
});

router.get('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await PacientService.getPacient(id);
        if (!pacient) {
            return res.status(404).json({ message: "Pacient not found" });
        }
        res.status(200).json(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching pacient", error: error.message });
    }
});

router.put('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    const pacientData = req.body;
    try {
        const updatedPacient = await PacientService.updatePacient(id, pacientData);
        if (!updatedPacient) {
            return res.status(404).json({ message: "Pacient not found" });
        }
        res.status(200).json(updatedPacient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating pacient", error: error.message });
    }
});

router.delete('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await PacientService.deletePacient(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting pacient", error: error.message });
    }
});

export default router;
