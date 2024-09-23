import ApiError from "../types/ApiError";

function testApiError(message: string, errorCode: number) {
    throw new ApiError(message, errorCode);
}

test("expect function to throw ApiError with error code 501 and message Not Implemented", () => {
    try {
        expect(testApiError("Not Implemented", 501)).toThrow(ApiError);
    } catch (error) {
        expect(error).toBeInstanceOf(ApiError);
        expect((error as ApiError).code).toBe(501);
        expect((error as ApiError).message).toMatch("Not Implemented");
    }
});
