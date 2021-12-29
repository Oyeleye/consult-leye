import React from 'react';
//import './App.css';
import { Typography, Button, Dialog, DialogActions, 
    DialogTitle } 
from '@material-ui/core/';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    app: {
		textAlign: 'center', 
		backgroundColor: 'yellow',
    },
	/*
    typographyStyleA: {
        color: '#012161',
    },
    typographyStyleB: {
		color: 'rgb(223, 12, 12)',
		fontWeight: 'bold',
		fontSize: '4rem' 
	},
	*/
	dialogTitle: {
        color: '#084bd3',
	},
	updateDialog1: {
		color: '#0c6ac6',
		fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
		fontSize: '1.5em',
		lineHeight: '1',
		marginBottom: '1em'
	},
	updateDialog2: {
		color: '#222',
		fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
		fontSize: '1.5em',
		lineHeight: '1',
		marginBottom: '1em'
	},
	navbarTypography: {
		fontWeight: 'bold'
	}
});



function App() {
//	const [anchorEl, setAnchorEl] = React.useState(null);
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [dialogUpdate, setDialogUpdate] = React.useState(false);
//	const [textChange, setTextChange] = React.useState(false);
//	const [inputText, setInputText] = React.useState(false);

//	const menuOpen = Boolean(anchorEl);

	const classes= useStyles();
/*
	const GameTypographyA = () => {
		return( 
			<Typography className={classes.typographyStyleA} variant='h4'>Colour Application</Typography>
		);
	};

	const GameTypographyB = () => {
		return( 
			<Typography className={classes.typographyStyleB} variant='h4'>Oops! Game Over!!</Typography>
		);
	};
*/	
	const UpdateDialog1 = () => {
        return(
			<Typography className={classes.updateDialog1}
				variant='h4'>Kindly contact via other means on this website, e.g. chat, email, etc.
			</Typography>);
    };

    const UpdateDialog2 = () => {
		return(
			<Typography className={classes.updateDialog2}
				variant='h4'>Due to high volume of calls, please contact via other means on this website, e.g. chat, email, etc. Thanks!
			</Typography>);
    };

    const handleDialogUpdate = () => {
        setDialogUpdate(true);
	};
/*	
	const toggleTextUpdate = () => {
		setTextChange(textChange=>!textChange);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};
*/
/*	
    const handleMenuClose = () => {
	//	setAnchorEl(null);
	};
*/
	const openDialog = (event) => {
	//	handleMenuClose(event);
		setDialogOpen(true);
	}
	const closeDialog = (event) => {
		setDialogOpen(false);
	}
	/*
	const handleInputText = (event) => {
		setInputText(event.target.value);
	}
	*/

	return (
		<>
			<div>

				<div onClick={openDialog} title='Please contact using other means e.g. chat or email, etc.'>
	                +353
				</div>
				
				
				<Dialog onClose={closeDialog} open={dialogOpen}>
					<DialogTitle id="simple-dialog-title"> { dialogUpdate? <UpdateDialog2 /> : <UpdateDialog1 /> } </DialogTitle>
					<DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>  
                    </DialogTitle>
					<DialogActions>
						<Button variant="contained" onClick={closeDialog}>Exit</Button>
						<Button variant="contained" onClick={handleDialogUpdate} color='primary'>More</Button>
					</DialogActions>
				</Dialog>	
			</div>
		</>
	);
}

export default App;
