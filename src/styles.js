import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container: {
      backgroundColor : theme.palette.background
    },
    ThumbIcon: {
        padding: '4px',
        borderRadius: '100px',
        position: 'absolute',
        top: '45%',
        left: '45%'
    }
}));

export default useStyles;