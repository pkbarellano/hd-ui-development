import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const CloseButtonUI = ({ color, onClick, label }) => {

    return (
        <Button
            variant='contained'
            size='small'
            color={(color) ? color : "primary"}
            onClick={onClick}
            startIcon={<CloseIcon />}>
            {(label) ? label : "Close"}
        </Button>
    );

}

export default CloseButtonUI;