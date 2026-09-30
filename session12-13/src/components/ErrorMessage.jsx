function ErrorMessage({ message }) {
  return (
    <p className="message error-message" role="alert">
      {message}
    </p>
  );
}

export default ErrorMessage;
