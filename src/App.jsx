import React from 'react';
import './App.css';
import { NOTE_NAME_KEY_LIST } from './const/const';
import Key from './key';

export default function App() {
	const noteList = NOTE_NAME_KEY_LIST.map(([name, key]) => ({
		type: name.includes('b') ? 'black' : 'white',
		name: name,
		path: 'notes/' + name,
		keyName: key,
	}));

	return (
		<div className="piano">
			{noteList.map((x, index) => (
				<Key type={x.type} name={x.name} path={x.path} keyName={x.keyName} key={index} />
			))}
		</div>
	);
}
