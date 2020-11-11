import React from "react";

interface PropTypes {
  url: string;
}

const Prisoner = ({ url }: PropTypes) => {
  return <img src={url} alt="Prisoner" />;
};

export default Prisoner;
