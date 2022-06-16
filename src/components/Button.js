import { darken, lighten } from "polished";
import React from "react";
import styled, { css } from "styled-components";

const ColorStyles = css`
    ${({ theme, color, outline }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            
            // &는 선택자 여기서는 button을 뜻한다.
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }

            ${({ outline }) => outline && css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `
            }
            
            `;
    }}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
    },
}

const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}


    ${({ fullwidth }) => fullwidth && css`
        width: 100%;
        justify-content: center;
        margin-left: 0;
        margin-top: 1rem;
    `
    }
`

const StyledButton = styled.button`
    /* 공통스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    margin-left: 1rem;

    /* 크기 */
    ${sizeStyles}
    
    /* 색상 */
    ${ColorStyles}
    
`;

const Button = ({ children, color, outline, size, fullwidth, openDialog, ...rest }) => {
    return (
        <StyledButton
            color={color}
            size={size}
            outline={outline}
            fullwidth={fullwidth}
            onClick={openDialog}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;