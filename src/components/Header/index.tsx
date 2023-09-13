import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

type Props = {};

export function Header({}: Props) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3514/3514721.png"
          width={80}
          alt=""
        />
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
