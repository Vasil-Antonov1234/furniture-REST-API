import { getErrorMessage } from "../utils/errorUtils.js";

export function errorHandler(error, req, res, next) {
    const statusCode = error.statusCode || 400;
    const message = getErrorMessage(error) || "Something went wrong!";

    res.status(statusCode).json({ message });
}