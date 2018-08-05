import React from 'react';

export default function ToggleColumnButtons(props) {
	return (
		<div className="toggleColumnButtons spine">
			<div className="toggleColumnButtons__inner">
				<label htmlFor="columnL">
					<span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</label>
				<label htmlFor="columnR">
					<span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</label>
			</div>
		</div>
	);
}
