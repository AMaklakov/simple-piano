import React, { useEffect, useRef, useState } from 'react';

export default function Key(props) {
	const { type, path, keyName } = props;

	const audioTag = useRef();
	const [active, setActive] = useState(false);

	const playSound = () => {
		const audio = audioTag.current;

		audio.currentTime = 0;
		audio.play();

		setActive(true);
		audio.onended = () => setActive(false);
	};

	const checkKeyDown = e => {
		if (e.repeat || e.key !== keyName) {
			return;
		}

		playSound();
	};

	/**
	 * Each piano key listens `keydown` by itself.
	 *
	 * TODO: a regular piano has 88 keys. Move to the top this subscription
	 * We need to listen this event only once on the top level.
	 */
	useEffect(() => {
		document.addEventListener('keydown', checkKeyDown);

		return () => document.removeEventListener('keydown', checkKeyDown);
	});

	return (
		<div className={`key ${type} ${active ? 'active' : ''}`} onMouseDown={playSound}>
			<audio ref={audioTag} src={path}></audio>
		</div>
	);
}
