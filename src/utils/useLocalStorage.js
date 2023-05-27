import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
	const saved = localStorage.getItem(key);
	let initial = defaultValue;

	try {
		initial = saved ? JSON.parse(saved) : defaultValue;
	} catch (error) {
		console.error(`Error parsing JSON for key '${key}':`, error);
	}

	return initial;
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

