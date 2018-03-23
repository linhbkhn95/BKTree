var React = require('react');
import PropTypes from 'prop-types';
const CustomTooltip  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },

  getIntroOfPage(label) {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    } else if (label === 'Page B') {
      return "Page B is about women's dress";
    } else if (label === 'Page C') {
      return "Page C is about women's bag";
    } else if (label === 'Page D') {
      return "Page D is about household goods";
    } else if (label === 'Page E') {
      return "Page E is about food";
    } else if (label === 'Page F') {
      return "Page F is about baby food";
    }
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      //console.log(this.props);
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <div className="intro"><div>Sự kiện:</div>{payload[0].value}</div>
        
        </div>
      );
    }

    return null;
  }
});

module.exports = CustomTooltip;