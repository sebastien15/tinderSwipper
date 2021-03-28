import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container: {
      backgroundColor : theme.palette.background,
      paddingTop: '10px'
    },
    ThumbIcon: {
        padding: '4px',
        borderRadius: '100px',
        position: 'absolute',
        top: '90%',
        left: '1%',
        display: 'none'
    },
    Img: {
      width: '90%',
      height: '200px',
      margin: 'auto'
    }
}));

export default useStyles;