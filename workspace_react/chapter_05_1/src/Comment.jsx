import React from "react";

const styles = {
  wrapper:{
    margin: 8,
    padding:8,
    display:"flex",
    flexDirection:"row",
    border:"1px solid gery",
    borderRadius: 16,
  },
  imageContainer:{},
  image:{width:50,height:50, borderRadius: 50},
  contentContainer:{
    marginLeft:8,
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
  },
  nameText:{
    color:"black",
    fontSize:16,
    fontWeight:"bold",
  },
  commentText:{
    color:"black",
    fontSize: 16,
  },
};


function Comment(props){
  return(
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fplay-lh.googleusercontent.com%2F38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo&type=sc960_832"
               style={styles.image}/>
        </div>
            <div style={styles.contentContainer}>
              <span style={styles.nameText}>{props.name}</span>
              <span style={styles.commentText}>
                {props.comment}
              </span>
            </div>
      </div>
  );
}

export default Comment;