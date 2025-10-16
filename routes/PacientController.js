import express from "express";
import pacientService from "../services/PacientService";

let router = express.Router();

router.post('/newPacient', async (req, res) => {
    try {
        const pacientData = req.body;
        const newPacient = await pacientService.savePacient(pacientData);
        res.status(201).json(newPacient);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const pacients = await pacientService.getAllPacients();
        res.json(pacients);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const pacient = await pacientService.getPacient(id);
        res.json(pacient);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const pacientData = req.body;
    try {
        const pacient = await pacientService.updatePacient(id, pacientData);
        res.json(pacient);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const pacient = await pacientService.deletePacient(id);
        res.json(pacient);
} catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export default router;
