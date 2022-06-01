import React from "react";

function Circle(props) {
  const styleCircle = {
    backgroundColor: props.color,
    width: props.size,
  };

  return (
    <div className="circle" style={styleCircle}>
      Circle
    </div>
  );
}

export default Circle;
