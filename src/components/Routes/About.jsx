import React from 'react';
import { connect } from 'react-redux';
import {
	_0ColLeft,
	_0ColRight,
	_0ColSplit,
	_1ColLeft,
	_1ColRight,
	_1ColSplit,
	_2ColLeft,
	_2ColRight,
	_2ColSplit,
	_3ColLeft,
	_3ColRight,
	_3ColSplit
} from '../Pangolin/actions.js';

class About extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.dispatch( _2ColRight() );
	}

	render() {
		return (
			<React.Fragment>
				<h2>About</h2>

				<p>Sed luctus, ex ac gravida semper, ante dui vestibulum diam, sagittis luctus ipsum tellus vitae diam. Nulla vitae ullamcorper tellus. Sed id cursus quam, pellentesque vehicula metus. Pellentesque tortor sapien, suscipit in dapibus id, malesuada et velit. Vestibulum id fermentum felis. Etiam tincidunt magna eget scelerisque fermentum. Pellentesque id consequat leo.</p>
				
				<p>Praesent eleifend ipsum eget commodo rhoncus. Maecenas eu nisi erat. Curabitur ut arcu tellus. In nec efficitur tellus. Nam lobortis augue mauris, eget mollis orci commodo id. Nunc nec leo non nunc congue suscipit vel non purus. Sed eu malesuada massa. Nullam pretium sodales nisl, vitae efficitur ipsum lacinia vel. Phasellus pulvinar faucibus leo sit amet placerat. Cras efficitur, elit a finibus sollicitudin, velit arcu eleifend urna, eu pharetra ipsum dui non arcu. Nunc aliquam ut tortor vitae laoreet. Nulla lobortis vel nunc et condimentum.</p>
				
				<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt luctus tortor eget lacinia. Duis gravida dolor eu blandit fermentum. In at dapibus dui. Maecenas cursus, dolor non luctus vehicula, tellus dui placerat velit, vitae finibus urna augue id lectus. Vestibulum ut elit id ipsum pellentesque tempor id sed metus. Sed porttitor a ex id faucibus.</p>
				
				<p>Suspendisse ut porta augue, euismod mollis enim. Nunc faucibus ultrices tortor eget varius. Curabitur scelerisque accumsan nulla id cursus. Etiam id auctor justo, ac imperdiet felis. Vivamus id tempus arcu. Vestibulum et justo diam. Aliquam ut ornare urna, eu efficitur lectus. Fusce a elit sodales, mattis augue ac, tempus justo. Phasellus ultrices nec nibh nec malesuada. Aliquam consequat placerat ligula non posuere. Nullam efficitur nisl a efficitur luctus.</p>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
  dataLayoutCol: state.pangolin.dataLayoutCol,
  dataLayoutPos: state.pangolin.dataLayoutPos
});

export default connect(mapStateToProps)(About);
