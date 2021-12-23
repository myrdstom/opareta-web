import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    container: {
        marginTop: '50px',
    },
    gridSeparator: {
        background: 'blue',
        height: '100%',
        borderRadius: '10px',
        color: '#fff',
    },
    count: {
        border: '1px solid',
    },
}));
