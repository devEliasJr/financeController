import * as Dialog from "@radix-ui/react-dialog";
import {
  Content,
  Overlay,
  CloseButton,
  TransationType,
  TransationTypeButton,
} from "./styles";
import { X, ArrowCircleUp, ArrowCircleDown } from "@phosphor-icons/react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransationType>
            <TransationTypeButton $variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransationTypeButton>
            <TransationTypeButton $variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TransationTypeButton>
          </TransationType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
