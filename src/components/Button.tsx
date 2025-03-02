import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/theme-provider"; // Use custom theme provider

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  padding: ${({ size }) =>
    size === "small" ? "4px 8px" : size === "large" ? "12px 24px" : "8px 16px"};

  ${({ variant, theme }) => variant === "primary" && `
    background-color: ${theme.colors.primary};
    color: white;
    border: none;
  `}

  ${({ variant, theme }) => variant === "secondary" && `
    background-color: ${theme.colors.secondary};
    color: white;
    border: none;
  `}

  ${({ variant, theme }) => variant === "outline" && `
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
  `}
`;

const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "medium", children, ...props }) => {
  const theme = useTheme(); // Get the theme dynamically

  return <StyledButton variant={variant} size={size} theme={theme} {...props}>{children}</StyledButton>;
};

export default Button;
