import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

type Props = {};

export function Transactions({}: Props) {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Salário Mensal</td>
              <td>
                <PriceHighlight variant="income">R$ 5.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>23/07/2023</td>
            </tr>
            <tr>
              <td width="50%">Curso de Ingles</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 300,00</PriceHighlight>
              </td>

              <td>Venda</td>
              <td>23/07/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
