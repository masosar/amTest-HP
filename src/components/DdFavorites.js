import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const DdFavorites = () => {
    return (
        <div>
            <Dropdown>
                <DropdownToggle>
                    Dropdown example
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Action 1</DropdownItem>
                    <DropdownItem>Action 2</DropdownItem>
                    <DropdownItem>Action 3</DropdownItem>
                    <DropdownItem>Action 4</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default DdFavorites
