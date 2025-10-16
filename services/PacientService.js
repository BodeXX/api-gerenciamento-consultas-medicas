import pacientRepository from "../repositories/PacientRepository";

const getAllPacients = async () => {
    return await pacientRepository.getAllPacients();
}

const getPacient = async (id) => {
    return await pacientRepository.getPacient(id);
}

const savePacient = async (PacientData) => {
    return await pacientRepository.savePacient(PacientData);
}

const updatePacient = async (id, PacientData) => {
    return await pacientRepository.updatePacient(id, PacientData);
}

const deletePacient = async (id) => {
    return await pacientRepository.deletePacient(id);
}



const pacientService = {
        getAllPacients,
        getPacient,
        savePacient,
        updatePacient,
        deletePacient

}

export default pacientService;
