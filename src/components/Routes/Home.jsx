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

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.dispatch( _1ColRight() );
	}

	render() {
		return (
			<React.Fragment>
				<p>Pangolin furls. Pangolin unfurls. Pangolin furls again.</p>
	
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit ipsum, varius a sapien facilisis, posuere blandit nunc. Nullam vel ex bibendum, tempus nunc nec, tempor elit. Etiam et gravida augue. Quisque enim augue, pulvinar nec scelerisque vel, facilisis ut tortor. Suspendisse eu elit orci. Sed a tincidunt erat, at accumsan mi. Aenean viverra facilisis turpis in imperdiet. Suspendisse suscipit luctus ligula a bibendum. Pellentesque at maximus odio. Suspendisse non orci in odio molestie elementum mattis eu diam. Proin sit amet libero et lacus maximus fermentum. Cras non imperdiet augue. Fusce vehicula vestibulum lacus id suscipit. Nulla et varius felis.</p>
	
				<p>Proin luctus orci est, rutrum lacinia metus ullamcorper sed. Quisque tincidunt tellus a est pulvinar, at aliquam nibh semper. Sed congue volutpat suscipit. Vivamus diam dui, pharetra non porta eu, ultrices ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis varius magna, at ullamcorper lorem feugiat et. Vivamus pellentesque turpis eu metus auctor, id volutpat eros hendrerit. Duis nec felis eu velit dapibus luctus nec vel diam. Nam faucibus elit nec faucibus vestibulum. Nullam tellus enim, aliquet quis risus eget, volutpat congue est. Vivamus blandit pulvinar iaculis. Donec tempus molestie luctus. Fusce dolor nunc, ullamcorper vitae dapibus eget, ullamcorper non mauris. Curabitur ultrices euismod iaculis. Curabitur sollicitudin egestas libero rutrum tempor.</p>
				
				<p>Curabitur luctus tristique varius. Nam vitae semper nisi. Mauris porttitor lacus eu justo commodo, a efficitur metus tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus pretium eros vitae arcu commodo laoreet. Duis molestie massa nulla, molestie ornare sem venenatis in. Nullam felis ex, commodo mattis aliquam a, hendrerit sed libero.</p>
				
				<p>Nam a urna sed justo finibus rhoncus nec ut ligula. Aliquam erat volutpat. Donec nisl augue, ultricies ac posuere non, accumsan vel arcu. Donec condimentum orci eu odio accumsan tristique et eu massa. Mauris gravida enim purus, at imperdiet elit efficitur eget. Vestibulum blandit nec ligula nec tempus. Suspendisse faucibus, justo quis commodo congue, nisi purus finibus lacus, eu hendrerit nulla tortor non sem. Sed sollicitudin diam at massa convallis, at placerat tortor pharetra. In pulvinar urna ut congue egestas. Vestibulum quis pellentesque arcu, sodales iaculis eros.</p>
				
				<p>Integer et nibh ac sem malesuada imperdiet. Sed blandit libero sed nisi facilisis semper. Etiam nec convallis augue. Morbi facilisis finibus ligula ac mollis. Duis eget odio luctus, suscipit metus vitae, mattis lorem. Donec imperdiet mauris quis lacus ultrices placerat. Curabitur ultrices id ligula sed cursus. Integer faucibus libero sit amet dui rhoncus, efficitur venenatis arcu facilisis. Phasellus nisl turpis, pellentesque eu justo ut, aliquet scelerisque odio. Vivamus at tempor velit. Morbi a mi tristique, ultricies elit vitae, pharetra augue.</p>
				
				<p>Donec dapibus libero quis elit fringilla, in dictum eros placerat. Sed gravida eleifend sem, eget elementum leo imperdiet quis. Praesent porttitor massa quis purus mollis dictum. Donec tempus elementum ornare. Vestibulum interdum porttitor ultrices. Aenean ac gravida tortor. Maecenas mi eros, bibendum id ante ac, posuere consequat sem. Integer sit amet venenatis purus. Suspendisse potenti. Integer sodales quam finibus placerat pellentesque. Sed ac quam odio. Donec tempus mi in diam scelerisque gravida. Vestibulum ac mi porttitor, euismod nulla vel, congue magna. Curabitur in ex et massa ullamcorper congue.</p>
				
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

export default connect(mapStateToProps)(Home);
