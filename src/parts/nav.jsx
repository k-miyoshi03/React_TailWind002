import React from 'react'
import Li from '../components/li'

const Nav = (props) => {
    return (
        <nav className={props.className}>
            <ul className='flex'>
                <Li text={'About'} link={'#about'} className={'flex-initial pr-5'} />
                <Li text={'Bicycle'} link={'#bicycle'} className={'flex-initial pr-5'} />
            </ul>
        </nav>
    )
}

export default Nav;