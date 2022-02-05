import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch } from 'react-redux';

const Filter = (props) => {
  const { materials, filterRobots, classes } = props;
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const material = event.target.value;
    setFilter(material);
    dispatch(filterRobots(material));
  };
  return (
    <Box pt={2}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label">filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="filter"
          className={classes.customOutline}
          onChange={handleChange}
        >
          {materials.map((item) => (
            <MenuItem value={item.name} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Filter;
