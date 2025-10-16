import { } from "express";
import appoitmenteService from "../services/AppointmentService";


let router = express.Router();

router.get('/appointments', async (req, res) => {
    try {
        const appointments = await appoitmenteService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAppointment/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const appointment = await appoitmenteService.getAppointments();
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAppointment', async (req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await appoitmenteService.saveAppointments(date, doctorId, pacientId);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await appoitmenteService.updateAppointments(id, {date, doctorId, pacientId});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const appointment = await appoitmenteService.deleteAppointments(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();
