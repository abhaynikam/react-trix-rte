import React from 'react';

import { ReactTrixRTEInput } from '../src/index';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ReactTrixRTEInput name='Jack'/>
      </div>
    );
  }
}

export default Example;
