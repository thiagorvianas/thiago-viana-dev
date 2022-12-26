import { Link, useLocation } from 'react-router-dom';
import logoFundoBranco from '../../../images/logo-fundo-branco.png';
import * as C from './styles';

export function DesktopMenu() {
  const location = useLocation().pathname;

  return (
      <C.Menu>
        <C.Before>
          <C.Logo src={ logoFundoBranco } alt="Logotipo Thiago Viana Dev" />

          <C.NavItems>
            <Link to="/">
              <C.LinkText selected={ location === "/" }>
                _hello
              </C.LinkText>

              <C.Selected selected={ location === "/" } />
            </Link>

            <Link to="/about-me">
              <C.LinkText selected={ location === "/about-me" }>
                _about-me
              </C.LinkText>

              <C.Selected  selected={ location === "/about-me" } />
            </Link>

            <Link className="last" to="/projects">
              <C.LinkText selected={ location === "/projects" }>
                _projects
              </C.LinkText>

              <C.Selected  selected={ location === "/projects" } />
            </Link>
          </C.NavItems>
        </C.Before>

        <C.ContactMe>
          <Link to="/contact-me">
            <C.LinkText selected={ location === "/contact-me" }>
              _contact-me
            </C.LinkText>

            <C.Selected  selected={ location === "/contact-me" } />
          </Link>
        </C.ContactMe>
      </C.Menu>
  );
}