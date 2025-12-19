import Switch from 'react-switch';

// Controlled Toggle: accepts `checked` and `onChange` props
const Toggle = ({ checked = false, onChange }) => {
  return (
    <span className="toggle-size">
      <Switch checkedIcon={false} uncheckedIcon={false} checked={checked} onColor="#EE5F54" onChange={(nextChecked) => onChange && onChange(nextChecked)} />
    </span>
  );
};

export default Toggle;