import styled,{keyframes} from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const Wrapper = styled.div`
    color: #454442;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem #00000026;
    margin: 20px 15px;

    overflow: hidden;
    transition: transform 0.3s ease; /* Add transition for smooth effect */
    transform-style: preserve-3d;
    width: 20%;
    flex-grow: 1;

    opacity: 0;
    animation: ${fadeInAnimation} 0.5s ease-in-out forwards;

    &:nth-child(1) {
        animation-delay: 0.5s;
    }

    &:nth-child(2) {
        animation-delay: 1s;
    }

    &:nth-child(3) {
        animation-delay: 1.5s;
    }

    &:nth-child(4) {
        animation-delay: 1.8s;
    }

    h4 {
        font-size: 1.5rem;
        line-height: 1.75rem;

        :hover {
            text-decoration: underline;
        }
    }
    a {
        text-decoration: none;
        color: #454442;
    }
`;

const CopyWrapper = styled.div`
    padding: 0 10px;
`;

export {Container, CopyWrapper, Wrapper};