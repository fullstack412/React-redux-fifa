import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './js/component/Hello';

import styles from './main.less';

class App extends React.Component {
	render () {
		return (
			<div>
				<Hello name="Luis"/>
			</div>
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById('app'), null);
