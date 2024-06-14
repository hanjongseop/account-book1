const InputAdd = ({ label, type, value, onChange }) => {
  return (
    <div className="input-list">
      <label>{label}</label>
      <input
        type={type}
        value={value || ""}
        onChange={onChange}
        min="2024-01-01"
        max="2024-12-31"
      />
    </div>
  );
};

export default InputAdd;
