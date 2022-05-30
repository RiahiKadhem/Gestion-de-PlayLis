import React from 'react'

const NavComponent = ({ onClick, onChange, onClickHome, onChangeSelect }) => (

    <nav class='navbar navbar-expand-lg navbar-light bg-info text-white'>
        <a class='navbar-brand' href='#'>Music</a>

        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon' />
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mr-auto'>
                <li class='nav-item active'>
                    <button class='nav-link' href='#' onClick={onClickHome}>Acceuil <span class='sr-only'>(current)</span></button>
                </li>

                <li class='nav-item dropdown'>
                    <select onChange={onChangeSelect}>
                        <option value='default'>Default</option>
                        <option value='acoustique'>Acoustique</option>
                        <option value='classique'>Classique</option>
                        <option value='country'>Country</option>
                        <option value='metal'>Metal</option>
                        <option value='pop'>Pop</option>
                        <option value='rock'>Rock</option>
                    </select>
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                        <a class='dropdown-item' href='#'>Action</a>
                        <a class='dropdown-item' href='#'>Another action</a>
                        <div class='dropdown-divider' />
                        <a class='dropdown-item' href='#'>Something else here</a>
                    </div>
                </li>

            </ul>
            <form class='form-inline my-2 my-lg-0'>
                <input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={onChange} />
                <button class='btn btn-outline-warning my-2 my-sm-0' type='button' onClick={onClick}>Search</button>
            </form>
        </div>
    </nav>
)

export default NavComponent
