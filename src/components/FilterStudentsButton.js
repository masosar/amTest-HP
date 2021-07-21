import React from 'react'

const FilterStudentsButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default FilterStudentsButton
