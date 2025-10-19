import AppointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async () => {
    return await AppointmentRepository.getAllAppointments();
}

const getAppointment = async (id) => {
    return await AppointmentRepository.getAppointment(id);
}

const saveAppointment = async (appointmentData) => {
    return await AppointmentRepository.saveAppointment(appointmentData);
}

const updateAppointment = async (id, appointmentData) => {
    return await AppointmentRepository.updateAppointment(id, appointmentData);
}

const deleteAppointment = async (id) => {
    return await AppointmentRepository.deleteAppointment(id);
}



const appointmentService = {
        getAllAppointments,
        getAppointment,
        saveAppointment,
        updateAppointment,
        deleteAppointment

}

export default appointmentService;
