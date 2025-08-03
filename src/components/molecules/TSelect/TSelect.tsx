import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

type TSelectProps = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: string[];
  label: string;
};

function TSelect(props: TSelectProps) {
  const { label, onChange, options, value } = props;

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TSelect;
