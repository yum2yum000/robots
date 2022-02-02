import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand:{
fontSize:'22px'
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
  right:{
    textAlign:'right'
  },
  marginCard:{
   marginTop:'10px',
   marginBottom:'10px',
   padding:'15px',
  }
});
export default useStyles;
