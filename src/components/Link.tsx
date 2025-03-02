import React from "react";
import styled from "styled-components";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  component?: React.ElementType;
  children: React.ReactNode;
}

const StyledLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: #1e40af;
  }
`;

const CustomLink: React.FC<LinkProps> = ({ to, component: Component = StyledLink, children, ...props }) => {
  return (
    <Component href={to} {...props}>
      {children}
    </Component>
  );
};

export default CustomLink;
