import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: ${props => (props.selected ? "2px solid green" : "none")};
`;

const Choice = props => {
  const { imgSrc, alt, id, handleClick, isSelected } = props;
  return (
    <Wrapper selected={isSelected} onClick={() => handleClick(id)}>
      <img src={imgSrc} alt={alt} />
    </Wrapper>
  );
};

export default Choice;
