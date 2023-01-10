import {StyledHeader, StyledButton} from "../style"
import { goToHome, goToProfile, goToProduct} from "../routes/coordinator.js";
import { useNavigate } from "react-router-dom"

function Header() {

const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate)} >
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToProduct(navigate)} >
        Ir para página do produto
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
