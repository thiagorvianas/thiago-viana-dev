import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as C from './styles';
import logoFundoBranco from '../../../images/logo-fundo-branco.png';

export function MobileMenu() {
  const [openMenu, SetOpenMenu] = useState(false);

  const location = useLocation().pathname;

  return (
      <C.Menu>
        <C.Before>    
          <C.Logo src={ logoFundoBranco } alt="Logotipo Thiago Viana Dev" />

          <C.BurgerMenu onClick={ () => SetOpenMenu(!openMenu) } openMenu={ openMenu } >
            <C.Icon className='bar-one' />
            <C.Icon className='bar-two' />
            <C.Icon className='bar-three' />
          </C.BurgerMenu>
        </C.Before>

        { openMenu &&
          <C.OpenedMenu>
            <C.NavItems>
              <Link to="/">
                <C.Selected selected={ location === "/" } />

                <C.LinkText selected={ location === "/" }>
                  _hello
                </C.LinkText>
              </Link>

              <Link to="/about-me">
                <C.Selected  selected={ location === "/about-me" } />

                <C.LinkText selected={ location === "/about-me" }>
                  _about-me
                </C.LinkText>
              </Link>

              <Link className="last" to="/projects">
                <C.Selected  selected={ location === "/projects" } />

                <C.LinkText selected={ location === "/projects" }>
                  _projects
                </C.LinkText>
              </Link>

              <Link to="/contact-me">
                <C.Selected  selected={ location === "/contact-me" } />
                
                <C.LinkText selected={ location === "/contact-me" }>
                  _contact-me
                </C.LinkText>
              </Link>
            </C.NavItems>
          </C.OpenedMenu>
        }
      </C.Menu>
  );
}