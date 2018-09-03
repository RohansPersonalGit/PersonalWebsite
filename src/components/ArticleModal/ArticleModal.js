import React from "react";
import Popup from "reactjs-popup";
import Card from '@material-ui/core/Card';

const ArticleModal = (props) => (
    <Popup
    trigger={<button className="button"> description</button>}
    position="right top"
    on="hover"
  >
    <Card title={props.desc ? props.desc : "No description available"}/>
  </Popup>
);
export default ArticleModal; 