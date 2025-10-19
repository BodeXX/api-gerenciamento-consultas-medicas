import PrescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
    return await PrescriptionRepository.getAllPrescriptions();
}

const getPrescription = async (id) => {
    return await PrescriptionRepository.getPrescription(id);
}

const savePrescription = async (prescriptionData) => {
    return await PrescriptionRepository.savePrescription(prescriptionData);
}

const updatePrescription = async (id, prescriptionData) => {
    return await PrescriptionRepository.updatePrescription(id, prescriptionData);
}

const deletePrescription = async (id) => {
    return await PrescriptionRepository.deletePrescription(id);
}



const prescriptionService = {
        getAllPrescriptions,
        getPrescription,
        savePrescription,
        updatePrescription,
        deletePrescription

}
export default prescriptionService;
