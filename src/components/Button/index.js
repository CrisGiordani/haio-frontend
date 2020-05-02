import React from 'react';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <Text>carregando...</Text>
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
