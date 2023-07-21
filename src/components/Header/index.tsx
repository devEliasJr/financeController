import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./styles";

import Logoimg from '../../assets/Logo.svg'

type Props = {};

export function Header({}: Props) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logoimg} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
