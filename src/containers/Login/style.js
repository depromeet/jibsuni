import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: cover;
    background-position: 50%;
`;

export const LoginForm = styled.div`
    width: 700px;
    height: 280px;
    margin: 100px auto;
    padding: 100px;
    opacity: 0.9;
    border-radius: 6px;
    -webkit-backdrop-filter: blur(26.3px);
    backdrop-filter: blur(26.3px);
    box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.09);
    background-image: linear-gradient(to bottom, #f8f9fb, #ffffff);
    text-align: center;
    z-index: 1;

    p{
        font-size: 36px;
        font-weight: bold;
        line-height: 0.76;
        padding-bottom: 40px;
    }
`;