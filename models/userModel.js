import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter a Username that is at least 3 characters'],
        minlength: [3, 'Please enter a Username that is at least 3 characters'],
        maxlength: [26, 'Please enter a Username that is less than 26 characters'],
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an Email Address'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a Password'],
        minlength: [8, 'Please enter a Password that is at least 8 characters'],

    },
    passwordConf: {
        type: String,
        required: [true, 'Please enter a Password']
    },
    photoUrl: {
        type: String,
        // required: [true, 'Please submit a Profile Photo'],
        // validate: {
        //     validator: () => {
        //         console.log(value, 'VALUE')
        //         if(value) {
        //             return
        //         }
        //     },
        //     // message: 'please submit a photo'
        //     error: 'please submit a photo'
        // }
    },
    time: { type: Date, default: Date.now }
});

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        delete ret.passwordConf;
    }
});

userSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret.password;
        delete ret.passwordConf;
    }
});

export default mongoose.model('User', userSchema);