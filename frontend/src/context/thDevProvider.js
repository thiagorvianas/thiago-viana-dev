import React from 'react';
import PropTypes from 'prop-types';

import ThDevContext from './thDevContext';

function ThDevProvider({ children }) {

  const myContext = {};

  return (
    <ThDevContext.Provider
      value={ myContext }
    >
      { children }
    </ThDevContext.Provider>
  );
}

ThDevProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThDevProvider;