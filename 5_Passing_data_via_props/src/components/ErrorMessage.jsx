let ErrorMessage = ({ allItems }) => {
  return allItems.length === 0 ? (
    <h5 className="my-4">No items in cart...</h5>
  ) : null;
};

export default ErrorMessage;
