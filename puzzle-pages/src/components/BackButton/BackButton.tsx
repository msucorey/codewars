import * as React from 'react';
import { withRouter, } from 'react-router-dom';

type Props = {
  className?: string;
  label?: string;
  history: any // TODO strengthen type
};

const BackButton: React.FC<Props> = ({ className = '', label = 'Back', history }) => (
    <button
      className={`back-button ${className}`}
      onClick={() => history.goBack()}
    >
      {label}
    </button>
  );

export default withRouter(BackButton);
