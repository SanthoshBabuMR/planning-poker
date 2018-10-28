
class VotingCards extends React.Component {

  renderCard ( point, index ) {
  	return <li key={index}>{point}</li>;
  }
  
  renderCards () {
  	return (
    	<ul>
         { this.props.points.map( this.renderCard ) }
    	</ul>
    );
  }
  render () {
	  return (
    	<div>
    	  { this.renderCards() }
    	</div>
    );
  }
}

const points = [ 1, 2, 3, 5, 8, 13 ];

ReactDOM.render(
  <VotingCards points={points}/>,
  document.getElementById('container')
);
