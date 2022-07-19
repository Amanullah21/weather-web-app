import React from 'react';
import ReactDOM from 'react-dom';
import {DebounceInput} from 'react-debounce-input';

class App extends React.Component {
  state = {
    value: ''
  };

  render() {
    return (
      <div>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => this.setState({value: event.target.value})} />

        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}