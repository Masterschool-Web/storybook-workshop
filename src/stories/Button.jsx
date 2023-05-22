import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Loader } from "./Loader";
// import './button.css';

const StyledButton = styled.button`
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "teal")};
  color: white;
  padding: ${(p) => (p.padding ? p.padding : "10px 20px")};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;

  &:active {
    transform: scale(0.95);
    // filter
    filter: brightness(1.5);
  }

  &:disabled {
    background-color: #eee;
    color: #666;
    border: 1px solid #aaa;
    cursor: not-allowed;

    &:hover {
      transform: none;
      filter: none;
    }
  }

  ${(p) =>
    !p.primary &&
    `
      background-color: white;
      color: teal;
      border: 1px solid teal;
    `}

  ${(p) => {
    switch (p.size) {
      case "small":
        return `font-size: 60%`;
      case "medium":
        return `font-size: 100%`;
      case "large":
        return `font-size: 200%`;
      default:
        return `font-size: 100%`;
    }
  }}
`;

export const Button = ({
  primary,
  backgroundColor,
  size,
  children,
  padding,
  loading,
  ...props
}) => {
  return (
    <StyledButton
      type='button'
      primary={primary}
      backgroundColor={backgroundColor}
      size={size}
      padding={padding}
      {...props}
    >
      {loading ? <Loader /> : children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  // label: PropTypes.string.isRequired,

  children: PropTypes.node.isRequired,

  padding: PropTypes.string,

  loading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: "medium",
  onClick: undefined,
  loading: false,
};
