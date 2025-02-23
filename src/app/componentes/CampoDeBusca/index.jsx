'use client'
import { useState } from "react";
import Image from "next/image";
import estilos from "./campoDeBusca.module.css";
import lupa from "../../../../public/lupa.png";
import { buscaProduto, retornaProdutos } from "@/app/servico";

export default function CampoDeBusca({ setListaProduto, setBotaoClicado, textoBusca, setTextoBusca }) {

  const handleBuscaProduto = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaProduto(buscaProduto(textoDigitado));
    setBotaoClicado(null);
  };

  
  return (
    <div className={estilos.campoDeBusca}>
      <Image className={estilos.img} src={lupa} alt="lupa" />
      <input
        type="text"
        value={textoBusca}
        onChange={(event) => handleBuscaProduto(event.target.value)}
        placeholder="Pesquise aqui um os pratos de nosso cardápio"
      />
    </div>
  )
}
