"use client";
import { useState } from "react";
import { PaymentForm } from "./PaymentForm";
import { Header, Main, Title } from "./styles";
import { SelectPayer } from "./SelectPayer";
import { payerAccounts } from "./mockData";
import { Payer } from "./types";

const { id, iban, balance: amount } = payerAccounts[0];
const defaultOption = { id, iban, amount };

export default function Home() {
  const [payer, setPayer] = useState<Payer>(defaultOption);

  return (
    <Main component={"main"}>
      <Header>
        <Title>Payment form</Title>
        <SelectPayer
          option={{ label: payer.iban, value: payer.id }}
          handleChange={(value) => {
            const currentPayer = payerAccounts.find(
              (item) => item.id === value
            );
            if (currentPayer) {
              setPayer({
                id: currentPayer.id,
                iban: currentPayer.iban,
                amount: currentPayer.balance,
              });
            }
          }}
        />
      </Header>
      <PaymentForm payer={payer} />
    </Main>
  );
}
