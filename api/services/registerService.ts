import { sequelize } from "../models";

async function registerWithEmailAndPassword(
    uid: string,
    email: string,
    passwordHash: string
) {
    sequelize.authenticate();

    const user = await sequelize.models["User"]?.create({
        uid,
        email,
        passwordHash,
    } as User);

    console.log(user);
}

export default { registerWithEmailAndPassword };
