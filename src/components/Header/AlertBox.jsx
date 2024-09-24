import "./Header.css";

const AlertBox = ({ message, onClose }) => {
  return (
    <div className="alert-box-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AlertBox;
