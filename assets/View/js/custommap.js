

var Hello = React.createClass({
    render: function (){
      return (<div>Hello at {this.props.now}</div>);
    } 
  });
  
  ReactDOM.render(<Hello now={new Date().toString()}/>, document.getElementById('container'));
  