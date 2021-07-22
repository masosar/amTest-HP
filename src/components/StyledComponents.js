import React from 'react'
import styled from 'styled-components'

const StyledComponents = () => {
    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: #fff;
        background-color: ${mainColor};
    `;
    return (
        <div>
            <h2>Styled comp</h2>
            <MyH3>Hola</MyH3>
        </div>
    )
}

export default StyledComponents
