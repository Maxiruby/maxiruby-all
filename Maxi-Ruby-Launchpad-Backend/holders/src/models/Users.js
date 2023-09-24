const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    password: {
        type: String,
    },
    email: {
        type: String,

        unique: true,
    },
    oauthProvider: {
        // Kullanıcının hangi servis ile giriş yaptığını belirtir (Google, Twitter)
        type: String,
        default: "",
    },

    username: {
        type: String,
        default: "",
    },
    surname: {
        type: String,
        default: "",
    },
    userVerified: { type: Boolean, default: false },
    banned: { type: Boolean, default: false },
    wallets: [
        {
            address: {
                type: String,
                default: "",
            },
            isActive: {
                type: Boolean,
                default: false,
            },
        },
    ],
    holderCount: {
        type: Number,
        default: 0,
    },
    isWhitelisted: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    tier: {
        type: String,
        enum: ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "None"],
        default: "None", // Varsayılan bir değer belirtmek isterseniz
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Acceptproject",
        },
    ],
});

exports.User = mongoose.model("User", userSchema);