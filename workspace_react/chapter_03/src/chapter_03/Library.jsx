import React from "react";
import Book from "./Book";
import Book1 from "./Book1"

function Library(){
  return(
      <div>
        <Book1 name="처음 만난 파이썬" numOfPage={300}/>
        <Book1 name="처음 만난 AWS" numOfPage={400}/>
        <Book1 name="처음 만난 리엑트" numOfPage={500}/>
      </div>
  );
}

export default Library;