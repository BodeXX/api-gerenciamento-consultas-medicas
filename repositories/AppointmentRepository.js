import  Appointment  from "../models/Appointment.js";

const getAllAppointments = async () => {
    return await Appointment.find();
}

const getAppointment = async (id) => {
    try {
        return await Appointment.findById(id);
    } catch (error) {
        throw new Error(error);
    }

}

const saveAppointment = async (appointmentData) => {
    try {
        const appointment = new Appointment(appointmentData);
        return await appointment.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateAppointment = async (id, appointmentData) => {
    try {
        return await Appointment.findByIdAndUpdate(id, appointmentData, { new: true });
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const appointmentRepository = {
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentRepository;
