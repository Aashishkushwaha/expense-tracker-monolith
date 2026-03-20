export const errorHandler = (res, error, message, statusCode = 500) => {
  return res.status(statusCode).json({
    message,
    error: error?.message ?? '',
  });
};
