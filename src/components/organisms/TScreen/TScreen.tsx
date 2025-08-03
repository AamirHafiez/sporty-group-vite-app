import React from 'react';
import TBox from '../../atoms/TBox/TBox';
import TAlert from '../../atoms/TAlert/TAlert';
import CircularProgress from '@mui/material/CircularProgress';

type TScreenProps = {
  isLoading?: boolean;
  errorString?: string;
  children: React.ReactNode;
};

function TScreen(props: TScreenProps) {
  const { children, errorString, isLoading } = props;

  if (isLoading) {
    return (
      <TBox sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </TBox>
    );
  }
  if (errorString) {
    return (
      <TBox>
        <TAlert severity="error">{errorString}</TAlert>
      </TBox>
    );
  }
  return children;
}

export default TScreen;
