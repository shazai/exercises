function EmptyState({ message = "No products found." }) {
  return <p className="message">{message}</p>;
}

export default EmptyState;
