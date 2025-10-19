import express from "express";
import AppointmentService from "../services/AppointmentService.js";


let router = express.Router();

router.get('/appointments', async (req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.status(200).json(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching appointments", error: error.message });
    }
});

router.get('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching appointment", error: error.message });
    }
});

router.post('/appointments', async (req, res) => {
    const appointmentData = req.body;
    try {
        const newAppointment = await AppointmentService.saveAppointment(appointmentData);
        res.status(201).json(newAppointment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating appointment", error: error.message });
    }
});

router.put('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    const appointmentData = req.body;
    try {
        const updatedAppointment = await AppointmentService.updateAppointment(id, appointmentData);
        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(updatedAppointment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating appointment", error: error.message });
    }
});

router.delete('/appointments/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await AppointmentService.deleteAppointment(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting appointment", error: error.message });
    }
});

export default router;
