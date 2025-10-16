import appoitmentRepository from "../repositories/AppointmentRepository";

const getAllAppointments = async () => {
    return await appoitmentRepository.getAllAppointments();
}

const getAppointments = async (id) => {
    return await appoitmentRepository.getAppointments(id);
}

const saveAppointments = async (date, doctorId, pacientId) => {
    return await appoitmentRepository.saveAppointments(date, doctorId, pacientId);
}

const updateAppointments = async (id, {date, doctorId, pacientId}) => {
    return await appoitmentRepository.updateAppointments(id, {date, doctorId, pacientId});
}

const deleteAppointments = async (id) => {
    return await appoitmentRepository.deleteAppointments(id);
}



const appoitmenteService = {
        getAllAppointments,
        getAppointments,
        saveAppointments,
        updateAppointments,
        deleteAppointments

}

export default appoitmenteService;
