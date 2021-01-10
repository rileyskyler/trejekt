import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.css';
import TaskInput from '../TaskInput'
import { grommet } from "grommet/themes";
import { Box, Text, ThemeContext, Grommet, defaultProps, TextInput } from "grommet";
import * as Go from "grommet";

console.log(Go)
console.log(defaultProps)

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


const App = () => (
  <Grommet theme={grommet}>
    <Box background="neutral-3">
      <Text color="light-1">This is a grommet component</Text>
    </Box>
    <TaskInput />
    <div>
    </div>
  </Grommet>
);


export default App;
