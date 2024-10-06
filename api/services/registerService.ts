import ApiError from "../types/ApiError";

/* eslint-disable @typescript-eslint/no-unused-vars */
async function registerWithEmailAndPassword(
    _uid: string,
    _email: string,
    _password: string
) {
    throw new ApiError("Not implemented", 501);
}

export default { registerWithEmailAndPassword };
