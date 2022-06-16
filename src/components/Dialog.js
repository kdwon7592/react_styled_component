import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Button from "./Button";


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translate(0px);
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    } 
    to {
        opacity: 0;
    }
`

const slideDown = keyframes`
    from {
        transform: translate(0px);
    }

    to {
        transform: translate(200px);
    }
`


const DarkBackground = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0,0.8);
    left: 0;
    top: 0;
    position: fixed;
    align-items: center;
    justify-content: center;

    animation-duration: 0.25s;
    animation-timing-function:  ease-out;
    animation-name: ${fadeIn} ;
    animation-fill-mode: forwards;

    ${props =>
        props.disappear && css`
            animation-name: ${fadeOut};
        `
    }
    
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    
    h3 {
        margin : 0;
        font-size: 1.5rem;
    }

    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    animation-timing-function:  ease-out;
    animation-name: ${(visible) => visible ? slideUp : slideDown} ;
    animation-fill-mode: forwards;

    ${props =>
        props.disappear && css`
            animation-name: ${slideDown};
        `
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-top: 3rem;
    justify-content: flex-end;
`;

// 괄호를 사용하면 상속받을 수 있음.
const ShortMarginButton = styled(Button)`
    margin-left: 0.5rem;
`;

const Dialog = ({ title, children, onCancel, onConfirm, visible }) => {
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250)
        }
        setLocalVisible(visible);
    }, [localVisible, visible]);

    if (!animate && !localVisible) return null;

    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onCancel}>취소</ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>삭제</ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    )

}

export default Dialog