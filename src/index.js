import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';
import App from 'components/App';

render(<App />, document.getElementById('__APP_ROOT__'));
