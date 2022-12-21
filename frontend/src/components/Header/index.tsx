import { Link } from 'react-router-dom';
import * as C from './styles';
import logoFundoBranco from '../../images/logo-fundo-branco.png';

export function Header() {
  return (
    <C.Container>
      <C.Logo src={ logoFundoBranco } alt="Logotipo Thiago Viana Dev" />

      <C.Menu>
        <Link to="/">_hello</Link>
        <Link to="/">_about-me</Link>
        <Link to="/">_projects</Link>
        <C.ContactMe>
          <Link to="/" className="contactMe">_contact-me</Link>
        </C.ContactMe>
      </C.Menu>

    </C.Container>
  );
}