import PacientRepository from "../repositories/PacientRepository.js";

const getAllPacients = async () => {
    return await PacientRepository.getAllPacients();
}

const getPacient = async (id) => {
    return await PacientRepository.getPacient(id);
}

const savePacient = async (pacientData) => {
    return await PacientRepository.savePacient(pacientData);
}

const updatePacient = async (id, pacientData) => {
    return await PacientRepository.updatePacient(id, pacientData);
}

const deletePacient = async (id) => {
    return await PacientRepository.deletePacient(id);
}



const pacientService = {
        getAllPacients,
        getPacient,
        savePacient,
        updatePacient,
        deletePacient

}

export default pacientService;
