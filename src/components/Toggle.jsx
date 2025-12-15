import Switch from 'react-switch';

// Controlled Toggle: accepts `checked` and `onChange` props
const Toggle = ({ checked = false, onChange }) => {
  return (
    <span className="toggle-size">
      <Switch checked={checked} onChange={(nextChecked) => onChange && onChange(nextChecked)} />
    </span>
  );
};

export default Toggle;