import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'pacient name is required.']
    },
    birthDate: {
        type: Date,
        required: [true, 'Birth Date is required.']
    },
    email: {
        type: String,
        required: [true, 'pacient email is required.']
    },
    phone: {
        type: String,
        required: [true, 'pacient phone is required.'],
        validate: {
            validator: (v) => {
                return /\d{2} 9\d{4}-\d{4}/.test(v);
            },
            message: props => `${props.value} This is not a valid phone value. PLease use the following formart 99 91234-4567`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pacient = mongoose.model('Pacient', pacientSchema);

export default Pacient;
