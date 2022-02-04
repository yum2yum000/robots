import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontSize: '22px',
  },
  main: {
    minHeight: '80vh',
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  marginCard: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '15px',
  },
  cardButton: {
    minWidth: '12px',
    padding: '8px',
    marginRight: '5px',
    marginLeft: '5px',
    lineHeight: '0',
  },
  border: {
    border: '1px solid black',
  },
  customOutline: {
    "& .MuiOutlinedInput-input": {
      color: "black"
    },
    "& .MuiInputLabel-root": {
      color: "black"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "black"
    },
    "&:hover .MuiInputLabel-root": {
      color: "black"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "black"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    }
  },
  orderMobile: {
    ['@media (max-width:780px)']: {
      // eslint-disable-line no-useless-computed-key
      order: '2',
    },
  },
});
export default useStyles;
