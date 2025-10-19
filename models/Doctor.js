import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Doctor name is required.']
    },
    login: {
        type: String,
        required: [true, 'Doctor login is required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Doctor password is required.'],
    },
    medicalSpecialty: {
        type: String,
        required: [true, 'Doctor medical specialty is required.']
    },
    medicalRegistration: {
        type: String,
        required: [true, 'Doctor medical registration is required.'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Doctor email is required.']
    },
    phone: {
        type: String,
        required: [true, 'Doctor phone is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;
