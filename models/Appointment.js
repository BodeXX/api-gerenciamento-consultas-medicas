import  mongoose  from "mongoose";
import Pacient from "./Pacient.js";
import Doctor from "./Doctor.js";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    date: {
        type: Date,
        required: [true, 'Appointment date is required.']
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: [true, 'Doctor ID is required.'],
        validate: {
            validator: async function(v) {
                const doctor = await Doctor.findById(v);
                return !!doctor;
            },
            message: props => `DoctorID ${props.value} not found.`
        }
    },
    pacientId: {
        type: Schema.Types.ObjectId,
        ref: 'Pacient',
        required: [true, 'Pacient ID is required.'],
        validate: {
            validator: async function(v) {
                const pacient = await Pacient.findById(v);
                return !!pacient;
            },
            message: props => `PacientID ${props.value} not found.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
