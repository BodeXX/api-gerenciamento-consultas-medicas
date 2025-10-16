import doctorRepository from "../repositories/DoctorRepository";

const getAllDoctors = async () => {
    return await doctorRepository.getAllDoctors();
}

const getDoctor = async (id) => {
    return await doctorRepository.getDoctor(id);
}

const saveDoctor = async (doctorData) => {
    return await doctorRepository.saveDoctor(doctorData);
}

const updateDoctor = async (id, doctorData) => {
    return await doctorRepository.updateDoctor(id, doctorData);
}

const deleteDoctor = async (id) => {
    return await doctorRepository.deleteDoctor(id);
}



const doctorService = {
        getAllDoctors,
        getDoctor,
        saveDoctor,
        updateDoctor,
        deleteDoctor

}

export default doctorService;
