import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay,CloseButton } from "./styles";
import { X } from "@phosphor-icons/react";

type Props = {};

export function NewTransactionModal({}: Props) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
