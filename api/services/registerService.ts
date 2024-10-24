import { sequelize } from "../models";
import ApiError from "../types/ApiError";
import User from "../models/User";

async function registerWithEmailAndPassword(
    uid: string,
    email: string,
    passwordHash: string
) {
    const userModel = sequelize.models["User"];

    if (!userModel) {
        throw new ApiError("User model in sequelize not found");
    }

    const user = (await userModel.create({
        uid,
        email,
        passwordHash,
    })) as User | undefined;

    if (!(user instanceof User)) {
        throw new ApiError("User registration failed");
    }

    return "User registered successfully";
}

export default { registerWithEmailAndPassword };
