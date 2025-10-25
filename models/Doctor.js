import  mongoose  from "mongoose";
import bcrypt from "bcrypt";

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
        required: [true, 'Doctor phone is required.'],
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

doctorSchema.pre('save', async function(next) {
    // Só criptografa a senha se ela foi modificada (ou é nova)
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Método para comparar a senha candidata com a senha no banco de dados
doctorSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;
