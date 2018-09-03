import React from "react";
import Popup from "reactjs-popup";
import Card from '@material-ui/core/Card';

const ArticleModal = (props) => (
    <Popup
    trigger={<button className="button"> {props.desc ? props.desc : "No description available"}</button>}
    position="right top"
    on="hover"
  >
    <Card title="SomeTitle"/>
  </Popup>
);
export default ArticleModal; 