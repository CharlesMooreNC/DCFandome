import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, red } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #DC143C, #00BFFF)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 38,
      marginBottom: 30,
    },
  },
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: red[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Return a hero</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        color="primary"
        inputProps={{
        'aria-label': 'secondary checkbox'
    }}
    />}
    label="Submit your hero"
  />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <header className="App-header">
          <Typography variant="h2" component="div">
            #TeamDC
          </Typography>
          <Typography variant="subtitle3">
            Who would win?
          </Typography>
        <ButtonStyled />
        <TextField
          variant="outlined"
          color="secondary"
          label="#TeamDC"
          placeholder="Wonder Woman"
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button
          endIcon={<DeleteIcon />}
          variant="contained"
          color="primary"
          size="large" >
            Save it
          </Button>
          <Button
          endIcon={<SaveIcon />}
          variant="contained"
          color="secondary"
          size="large" >
            Discard it
        </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
      </ThemeProvider>
  );
}

export default App;
