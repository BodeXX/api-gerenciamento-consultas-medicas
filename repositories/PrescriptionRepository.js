import  Prescription  from "models/prescription";

const getAllPrescriptions = async () => {
    try {
            return await Prescription.find();
    } catch (error) {
        throw new Error(error);
    }
};

const getPrescription = async (id) => {
    try {
        return await Prescription.findById(id);
    } catch (error) {
        throw new Error(error);
    }

};

const savePrescription = async (PrescriptionData) => {
    try {
        const prescription = new Prescription(PrescriptionData);
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
};

const updatePrescription = async (id, PrescriptionData) => {
    try {
        return await Prescription.findByIdAndUpdate(id, PrescriptionData, {new: true});
    } catch (error) {
        throw new Error(error);
    }
};

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
};



const PrescriptionRepository = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}


export default PrescriptionRepository;
