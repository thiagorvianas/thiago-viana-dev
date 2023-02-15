class HttpException extends Error {
  static handle(
    error,
    _req,
    res,
    next,
  ) {
    const { status, message } = error;
    res.status(status || 500).json({ message });
    next();
  }
}

export default HttpException;