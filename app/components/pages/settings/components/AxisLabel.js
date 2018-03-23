import React from 'react';

function renderText(child, x, y, rotate, stroke, key) {
  if (child && child.content) {
    console.log(child);
    return (<text
      key={key}
      x={15}
      y={31}
      transform={`rotate(${rotate})`}
      textAnchor=""
      stroke={stroke}
      {...child.props}>
      <div className="title-chart-y"> {child.content}</div>
    </text>);
  }

  return (<text
    key={key}
    x={x}
    y={y}
    transform={`rotate(${rotate})`}
    textAnchor="middle"
    stroke={stroke}>{child}</text>);
}

function AxisLabel({ axisType, x, y, width, height, stroke, children }) {
  const isVert = axisType === 'yAxis';
  //const cx = isVert ? x : x + (width / 2);
  const cx = 22;
  const cy =34;
 // const cy = isVert ? (height / 2) + y : y + height + 20;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  const lineHeight = 20;

  if (children.length > 1 && children.map) {
    return (<g>
      {children.map((child, index) =>
        renderText(
          child,
          cx,
          cy + index * lineHeight,
          rot,
          stroke,
          index)
      )}
    </g>);
  }

  return renderText(children, cx, cy, rot, stroke);
}

AxisLabel.propTypes = {
  axisType: React.PropTypes.oneOf(['yAxis', 'xAxis']),
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  stroke: React.PropTypes.string,
  children: React.PropTypes.any,
};

module.exports = AxisLabel;