import { css } from '@emotion/css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = css`
    margin-bottom: 15px;
    a{
        color: tomato;
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 4px;
        margin: 0px 8px;
        &.active{
            // and any active link get this style
            border-bottom: 3px solid green;
        }
    }
    a:hover{
        color: tomato;
        background-color: #fff;
        border-bottom: 3px solid tomato;
        cursor: pointer;
    }
`

const Nav = () => (
    <nav className={navStyle}>
        {/* NavLink provides an 'active' property by default, which Link doesn't */}
        <NavLink to="/" end>Products</NavLink>
        <NavLink to="/admin">Admin</NavLink>
    </nav>
)

export default Nav