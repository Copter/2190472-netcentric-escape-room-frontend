import React from "react";

interface PropTypes {
  url: string;
}

const Warder = ({ url }: PropTypes) => {
  return <img src={url} alt="Warder" />;
};

export default Warder;
