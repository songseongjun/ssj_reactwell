import React from "react";

function FancyBorder(propos){
  return(
      <div className={'FancyBorder FancyBorder-' + propos.color}>
        {propos.children}
      </div>
  );
}

export default FancyBorder