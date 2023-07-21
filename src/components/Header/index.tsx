import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import Logoimg from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "../NewTransactionModal";

type Props = {};

export function Header({}: Props) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logoimg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
