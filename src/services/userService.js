import User from "../models/User.js"
import bcrypt from "bcrypt";
import generateAuthToken from "../utils/tokenUtils.js";


    export async function register(email, password) {
        const user = await User.create({ email, password });
        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };
    };

    export async function login(email, password) {
        const user = await User.findOne({email});

        if (!user) {
            throw new Error("Invalid username or password!");
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("Invalid username or password!");
        };
        
        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };
    };