import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function MenuItemDropdown() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
      }));
      
      const classes = useStyles();
      const [language, setLanguage] = React.useState('');
      const [open, setOpen] = React.useState(false);

      const handleChange = (event) => {
        setLanguage(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
      
    return (
        <div>
                          
                      <FormControl className={classes.formControl}>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={language}
                          onChange={handleChange}
                        >
                          <MenuItem value='English (En)'>English (En)</MenuItem>
                          <MenuItem value='Finnish (Fi)'>Finnish (Fi)</MenuItem>
                          <MenuItem value='Deutsch (De)'>Deutsch (De)</MenuItem>
                        </Select>
                      </FormControl>
                                
        </div>
    )
}
