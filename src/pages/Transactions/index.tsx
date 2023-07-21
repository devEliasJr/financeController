import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

type Props = {};

export function Transactions({}: Props) {
  return (
    <div>
      <Header />
      <Summary />
    </div>
  );
}
