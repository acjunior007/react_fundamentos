import React from "react";

export default function ComParametros(props) {
  const { titulo, aluno, nota } = props;
  const status = nota >= 7 ? "Aprovado (=D)" : "Reprovado (='| )";
  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong> {aluno} </strong>
        tem a nota
        <strong> {nota} </strong> e está
        <strong> {status} </strong>
      </p>
    </div>
  );
}
