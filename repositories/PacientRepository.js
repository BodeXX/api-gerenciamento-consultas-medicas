import  Pacient  from "../models/Pacient.js";

const getAllPacients = async () => {
    return await Pacient.find();
};

const getPacient = async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error(error);
    }

};

const savePacient = async (PacientData) => {
    try {
        const pacient = new Pacient(PacientData);
        return await pacient.save();
    } catch (error) {
        throw new Error(error);
    }
};

const updatePacient = async (id, PacientData) => {
    try {
        return await Pacient.findByIdAndUpdate(id, PacientData, {new: true});
    } catch (error) {
        throw new Error(error);
    }
};

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
};



const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}


export default pacientRepository;
