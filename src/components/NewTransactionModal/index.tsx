import * as Dialog from "@radix-ui/react-dialog";
import {
  Content,
  Overlay,
  CloseButton,
  TransationType,
  TransationTypeButton,
} from "./styles";
import { X, ArrowCircleUp, ArrowCircleDown } from "@phosphor-icons/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransationType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransationTypeButton $variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransationTypeButton>
                  <TransationTypeButton $variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransationTypeButton>
                </TransationType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
