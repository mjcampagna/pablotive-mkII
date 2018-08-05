import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
	return (
		<ul className={props.classes}>
			<li className="menu-item">
				<Link to="/">Home</Link>
			</li>
			<li className="menu-item">
				<Link to="/about">About</Link>
			</li>
		</ul>

		// <ul className={props.classes}>
		// 	<li className="menu-item"><a>Home</a></li>
		// 	<li className="menu-item menu-item-has-children"><a>Artists</a>
		// 		<ul className="sub-menu">
		// 			<li className="menu-item menu-item-has-children"><a>David Bowie</a>
		// 				<ul className="sub-menu">
		// 					<li className="menu-item"><a>Heroes</a></li>
		// 					<li className="menu-item"><a>Low</a></li>
		// 					<li className="menu-item"><a>Lodger</a></li>
		// 					<li className="menu-item"><a>Scary Monsters and Super Creeps</a></li>
		// 				</ul>
		// 			</li>
		// 			<li className="menu-item menu-item-has-children"><a>Frente</a>
		// 				<ul className="sub-menu">
		// 					<li className="menu-item"><a>Marvin the Album</a></li>
		// 					<li className="menu-item"><a>Shape</a></li>
		// 					<li className="menu-item"><a>Try to Think Less</a></li>
		// 				</ul>
		// 			</li>
		// 			<li className="menu-item menu-item-has-children"><a>Liam Finn</a>
		// 				<ul className="sub-menu">
		// 					<li className="menu-item"><a>I'll Be Lightning</a></li>
		// 					<li className="menu-item"><a>FOMO</a></li>
		// 					<li className="menu-item"><a>The Nihilist</a></li>
		// 				</ul>
		// 			</li>
		// 		</ul>
		// 	</li>
		// 	<li className="menu-item menu-item-has-children"><a>Film</a>
		// 		<ul className="sub-menu">
		// 			<li className="menu-item menu-item-has-children"><a>Studio Ghibli</a>
		// 				<ul className="sub-menu">
		// 					<li className="menu-item"><a>Naussica of the Valley of the Wind</a></li>
		// 					<li className="menu-item"><a>Princess Mononoke</a></li>
		// 					<li className="menu-item"><a>Spirited Away</a></li>
		// 					<li className="menu-item"><a>Howl's Moving Castle</a></li>
		// 				</ul>
		// 			</li>
		// 			<li className="menu-item menu-item-has-children"><a>Guillermo del Toro</a>
		// 				<ul className="sub-menu">
		// 					<li className="menu-item"><a>Pan's Labyrinth</a></li>
		// 					<li className="menu-item"><a>Pacific Rim</a></li>
		// 					<li className="menu-item"><a>The Shape of Water</a></li>
		// 				</ul>
		// 			</li>
		// 		</ul>
		// 	</li>
		// </ul>
	);
}
