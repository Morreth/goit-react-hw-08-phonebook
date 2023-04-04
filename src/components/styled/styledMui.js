import {
  Button,
  Input,
  InputLabel,
  ListItemButton,
  styled,
} from '@mui/material';

export const ColorLinkButton = styled(ListItemButton)(() => ({
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    borderRadius: `2px`,
    backgroundColor: '#CCCCFF',
    color: '#3399FF',
  },
  '&.active': {
    backgroundColor: `#40cd9e`,
    color: '#fff',
    borderRadius: `2px`,
  },
}));

export const ColorButton = styled(Button)(() => ({
  color: 'inherit',
  padding: '5px',
  border: '1px solid #202020',
  borderRadius: `2px`,
  '&:hover': {
    backgroundColor: `#40cd9e`,
    color: `#fff`,
    border: `1px solid #202020`,
  },
}));

export const StyledInput = styled(Input)({
  marginBottom: '32px',
  '&.MuiInput-underline:after': {
    borderBottomColor: '#202020',
  },

  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#202020',
    },
  },
});

export const StyledInputLable = styled(InputLabel)({
  '&.Mui-focused': {
    color: '#202020',
  },
});