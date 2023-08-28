import { GiFullPizza,GiHamburger,GiNoodles,GiPieSlice } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useState } from 'react';
import {BsMoon,BsSun} from 'react-icons/bs'
import logo from '/Logo.png'
import { useContext } from 'react';
import { myContext } from '../context/myContext';


export const HeaderBar = () => {
    const [inputValue, setInputValue] = useState('')
    const {changeTheme,theme} = useContext(myContext)

    return (
        <header>
            <div className='header_search_bar'>
            {theme==='dark'?<BsMoon onClick={changeTheme} className='themeicon' style={{color:'orange',fontSize:'24px'}}/>:<BsSun onClick={changeTheme} className='themeicon' style={{color:'orange',fontSize:'24px'}} />}
                <div className='logo'>
                    <NavLink to='React-recipe-app/'>
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
    padding: 10px;
    align-items: center;
    justify-content: center;
    gap: 2%;
    *{
        text-decoration: none;
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

