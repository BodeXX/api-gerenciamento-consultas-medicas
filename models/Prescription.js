import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'prescription date is required.']
    },
    appointmentId: {
        type: Schema.Types.ObjectId,
        ref: 'appointment',
        required: [true, 'appoitment ID name is required.']
    },
    medicine: {
        type: String,
        required: [true, 'medicine name is required.']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required.'],
    },
    instructions: {
        type: String,
        required: [true, 'Instructions are required.'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
