/*
 * @Author: Chao Yang 
 * @Date: 2019-02-26 10:23:29 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-27 18:14:41
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './startup';

ReactDOM.render(
  <React.Suspense fallback={<span />}><App /></React.Suspense>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();