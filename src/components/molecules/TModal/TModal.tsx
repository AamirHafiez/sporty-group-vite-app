import Modal, { type ModalProps } from '@mui/material/Modal';
import TBox from '../../atoms/TBox/TBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TModal(props: ModalProps) {
  const { children, ...rest } = props;

  return (
    <Modal {...rest}>
      <TBox sx={style}>{children}</TBox>
    </Modal>
  );
}
