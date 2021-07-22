import React from 'react'
import styled from 'styled-components'

const HouseBg = () => {
    const housestyle = styled.span`
        position: absolute;
        width: 210px;
        height: 265px;
        left: 0px;
        top: 0px;
        bottom: 0px;
        background: linear-gradient(135deg, #FF0000 0%, #FED482 100%);
        border-radius: 16px 0px 0px 16px;
    `
    return (
        <div>
            <housestyle>Hi</housestyle>
        </div>
    )
}

export default HouseBg
