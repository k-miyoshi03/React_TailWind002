import React from 'react';
import {Ul, Img, Atag, H1, Li} from '../components/index';
const Header = (props) => {
  return (
    <React.Fragment>
        <H1 className={'hover:opacity-60'}>
          <Atag link={'#'}>
            <Img className={''} src={'./logo.svg'}/>
          </Atag>
        </H1>
      <nav className={''}>
        <Ul className={'flex justify-between items-center p-3'}>
          <Li className={'ml-5'}>
            <Atag className={'hover:opacity-60'} link={'#about'}>About</Atag>
          </Li>
          <Li className={'ml-5'}>
            <Atag className={'hover:opacity-60'} link={'#works'} >{'Works'}</Atag>
          </Li>
          <Li className={'ml-5'}>
            <Atag className={'hover:opacity-60'} link={'#news'}>{'News'}</Atag>
          </Li>
          <Li className={'ml-5'}>
            <Atag className={'hover:opacity-60'} link={'#contact'}>{'Contact'}</Atag>
          </Li>
          <Li className={'ml-5'}>
            <Atag link={'#contact'}>
              <Img className={'h-5 w-5 hover:opacity-60'} src={'./icon-instagram.png'}/>
            </Atag>
          </Li>
        </Ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;
