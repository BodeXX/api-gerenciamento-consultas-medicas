import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return await DoctorRepository.getAllDoctors();
}

const getDoctor = async (id) => {
    return await DoctorRepository.getDoctor(id);
}

const saveDoctor = async (doctorData) => {
    return await DoctorRepository.saveDoctor(doctorData);
}

const updateDoctor = async (id, doctorData) => {
    return await DoctorRepository.updateDoctor(id, doctorData);
}

const deleteDoctor = async (id) => {
    return await DoctorRepository.deleteDoctor(id);
}



const doctorService = {
        getAllDoctors,
        getDoctor,
        saveDoctor,
        updateDoctor,
        deleteDoctor

}

export default doctorService;
