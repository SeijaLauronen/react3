import React, { Component } from 'react';
import SearchWithHooks from './SearchWithHooks'; //87

function App() { // kokeilin vaihtaa funktioksi, toimiiko samalla tavalla
	return (
		//Tuo on ärsyttävä kun table ja tbodysta tulee usein:Whitespace text nodes cannot appear as a child of <tbody>. Vaikka siellä ei olis mitään whitespacea??!!	
		<div>
			<header>
				<h1>React 3 tehtävät</h1>
			</header>
			<SearchWithHooks></SearchWithHooks>
		</div>
	);
}


export default App;
