import { GiFullPizza,GiHamburger,GiNoodles,GiPieSlice } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useState } from 'react';

import logo from '/Logo.png'


export const HeaderBar = () => {
    const [inputValue, setInputValue] = useState('')
    return (
        <header>
            <div className='header_search_bar'>
                <div className='logo'>
                    <NavLink to='https://data111a.github.io/React-recipe-app'>
                        <div className='logo' style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
                            <img src={logo} className='logo_img' alt='logo' />
                        </div>
                    </NavLink>
                </div>
                <div className='search_bar'>
                    <input type="text" className='search_input' value={inputValue} placeholder='Any meal' onChange={(e) => setInputValue(e.target.value)} />
                        <NavLink to={`/React-recipe-app/search/${inputValue}`}>
                            <button className='search_button' onClick={() => setInputValue('')}>Search</button>
                        </NavLink>
                </div>
            </div>
            <CategoyNavBar>
                <div className='category'>
                    <NavLink to='/React-recipe-app/category/Italian'>
                        <GiFullPizza />
                        <p>Italian</p>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/React-recipe-app/category/Chinese'>
                        <GiNoodles />
                        <p>Chinese</p>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/React-recipe-app/category/American'>
                        <GiHamburger />
                        <p>American</p>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/React-recipe-app/category/British'>
                        <GiPieSlice />
                        <p>British</p>
                    </NavLink>
                </div>
            </CategoyNavBar>
        </header>
        )
}

const CategoyNavBar = styled.nav`
    display: flex;
    border-bottom: 10px solid orange;
    padding: 10px;
    align-items: center;
    justify-content: center;
    gap: 2%;
    *{
        text-decoration: none;
    }
    .category svg{
        color : rgb(109, 39, 39);
    }
    p{
        margin:0;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:5px;
        color : rgb(139, 39, 39);
    }
`

