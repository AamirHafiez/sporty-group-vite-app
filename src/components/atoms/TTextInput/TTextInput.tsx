import TextField from '@mui/material/TextField';
import React from 'react';

type TTextInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
};

function TTextInput(props: TTextInputProps) {
  const { label, onChange, value } = props;

  return <TextField fullWidth label={label} variant="outlined" value={value} onChange={onChange} />;
}

export default TTextInput;
