class ApiError extends Error {
    public code?: number | undefined;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

export default ApiError;
