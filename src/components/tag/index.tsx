import React, { FunctionComponent } from "react";
import "./tag.css";

const Tag = (props: any) => (
    <div key={props.tag} className="control">
      <div className="tags has-addons">
      <span className="tag is-dark" onClick={() => props.handleSelectTopic(props.tag)}>{props.tag}</span>
      </div>
    </div>
)

export default Tag;