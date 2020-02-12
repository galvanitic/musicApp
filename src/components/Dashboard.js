import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    minWidth: 275

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Dashboard extends Component {
  state = {
    online: true,
    volume: null,
    quality: null,
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };
  valuetext = (value) => {
    return `${value}`;
  }
  handleSelectChange = event => {
    this.setState({quality: event.target.value})
  };
  handleVolume = event => {
    this.setState({volume: event.target.value})
  }

  render() {
    return (
      <div className='dash'>
        <h2>Welcome User!</h2>
        <div className='card-container'>
          <Card className='card'>
            <CardContent>
              <Typography variant="h5">Online Mode</Typography>
              <Typography className={useStyles.title} color="textSecondary" gutterBottom>Is this application connected to the internet?</Typography>
              <Switch
                checked={this.state.online}
                onChange={this.handleChange('online')}
                value="online"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </CardContent>
          </Card>
          <Card className='card'>
            <CardContent>
              <Typography variant="h5">Master Volume</Typography>
              <Typography className={useStyles.title} color="textSecondary" gutterBottom>Overides all other sound settings in the application</Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                onChange={this.handleChange}
              />
            </CardContent>
          </Card>
          <Card className='card'>
            <CardContent>
              <Typography variant="h5">Sound Quality</Typography>
              <Typography className="" color="textSecondary" gutterBottom>Manually control the musci quality in event of poor connection.</Typography>
              <FormControl className="simple-select">
                <InputLabel id="demo-simple-select-label">Sound Quality</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.age}
                  onChange={this.handleSelectChange}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </div>
        <div className='alerts'>
          {!this.state.online ? <Alert severity="warning">Your application is offline. You won't be able to share or stream music to other devices.</Alert> : null}
          {(this.state.volume > 80) ? <Alert severity="warning">Listening to music at a high volume could cause long-term hearing loss.</Alert> : null}
          {!this.state.online ? <Alert severity="warning">Music quality is degraded. Increase quality if your connection allows it.</Alert> : null}
        </div>
      </div>
    );
  }
}

export default Dashboard;