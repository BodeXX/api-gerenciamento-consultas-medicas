import  Doctor  from "../models/Doctor.js";

const getAllDoctors = async () => {
    return await Doctor.find();
};

const getDoctor = async (id) => {
    try {
        return await Doctor.findById(id);
    } catch (error) {
        throw error;
    }

};

const saveDoctor = async (doctorData) => {
    try {
        const doctor = new Doctor(doctorData);
        return await doctor.save();
    } catch (error) {
        throw error;
    }
};

const updateDoctor = async (id, doctorData) => {
    try {

        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return null; // Retorna nulo se o médico não for encontrado
        }

        // Atualiza os campos do médico com os novos dados
        Object.assign(doctor, doctorData);

        return await doctor.save(); // .save() irá disparar o hook pre('save')
    } catch (error) {
        throw error;
    }
};

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
};

// login

const getDoctorByLogin = async (login) => {
    try {
        return await Doctor.findOne({"login": login});
    } catch (error) {
        throw new Error(error);

    }
};



const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorRepository;
