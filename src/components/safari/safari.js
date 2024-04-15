import React from "react";
import { Container,CopyWrapper,Wrapper } from "./safari.styled";

// Safari component renders a styled container with an image and copy
// This component can be used to display the safari blocks content and it accepts props: heading,children,description,link
const Safari = ({heading,children,description,link}) => {
    return (
        <Wrapper>
            <Container>
                <div className="image-container">
                    {children}
                </div>
                <CopyWrapper>
                    <h4>
                        <a href={link}>{heading}</a>
                    </h4>
                    <p>{description}</p>
                </CopyWrapper>
            </Container>
        </Wrapper>
    )
}

export default Safari;
