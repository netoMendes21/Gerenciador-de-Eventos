/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
"use client";
import DashBoardEvento from "@/components/evento/DashBoardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { Convidado, Evento, eventos } from "core";
import { use, useEffect, useState } from "react";
export default function PaginaAdminEvento(props: any) {
  const params: any = use(props.params);

  const id = params.todos[0];
  const [evento, setEvento] = useState<Evento | null>(null);
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

  const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];

  const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalGeral =
    presentes?.reduce((total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha);
    setEvento(evento ?? null);
  }

  useEffect(() => {
    carregarEvento();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, senha]);

  return (
    <div className="flex flex-col items-center">
      {evento ? (
        <DashBoardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral}
        />
      ) : (
        <FormSenhaEvento />
      )}
    </div>
  );
}
