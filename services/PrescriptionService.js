import prescriptionRepository from "../repositories/prescriptionRepository";

const getAllPrescriptions = async () => {
    return await prescriptionRepository.getAllPrescriptions();
}

const getPrescription = async (id) => {
    return await prescriptionRepository.getPrescription(id);
}

const savePrescription = async (prescriptionData) => {
    return await prescriptionRepository.savePrescription(prescriptionData);
}

const updatePrescription = async (id, prescriptionData) => {
    return await prescriptionRepository.updatePrescription(id, prescriptionData);
}

const deletePrescription = async (id) => {
    return await prescriptionRepository.deletePrescription(id);
}



const prescriptionService = {
        getAllPrescriptions,
        getPrescription,
        savePrescription,
        updatePrescription,
        deletePrescription

}
export default prescriptionService;
