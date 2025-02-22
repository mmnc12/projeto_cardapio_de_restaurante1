'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./categorias.module.css";
import entrada from "../../../../public/entrada.png";
import massa from "../../../../public/massa.png";
import carne from "../../../..//public/carne.png";
import bebidas from "../../../../public/bebidas.png";
import salada from "../../../../public/salada.png";
import sobremesa from "../../../../public/sobremesa.png";
import { filtraCategoria } from "@/app/servico";
export default function Categorias({ setListaProduto, botaoClicado, setBotaoClicado }) {


  const handleFiltrarProdutoCategoria = (categoria) => {
    setBotaoClicado(categoria);
    setListaProduto(filtraCategoria(categoria));
  };

  return (
    <section className={estilos.categorias}>
      <button
        className={botaoClicado === "Entradas" ? estilos.btnClicado : ""}
        onClick={() => handleFiltrarProdutoCategoria("Entradas")}>
        <Image className={estilos.img} src={entrada} alt="Entrada" />
        <span>Entradas</span>
      </button>
      <button
        className={botaoClicado === "Massas" ? estilos.btnClicado : ""}
        onClick={() => handleFiltrarProdutoCategoria("Massas")}>
        <Image className={estilos.img} src={massa} alt="massa" />
        <span>Massas</span>
      </button>
      <button
        className={botaoClicado === "Carnes" ? estilos.btnClicado : ""}
        onClick={() => handleFiltrarProdutoCategoria("Carnes")}>
        <Image className={estilos.img} src={carne} alt="Carne" />
        <span>Carnes</span>
      </button>
      <button
        className={botaoClicado === "Bebidas" ? estilos.btnClicado : ""}
        onClick={() => handleFiltrarProdutoCategoria("Bebidas")}>
        <Image className={estilos.img} src={bebidas} alt="Bebidas" />
        <span>Bedidas</span>
      </button>
      <button
        className={botaoClicado === "Saladas" ? estilos.btnClicado : ""}
        onClick={() => handleFiltrarProdutoCategoria("Saladas")}>
        <Image className={estilos.img} src={salada} alt="Salada" />
        <span>Saladas</span>
      </button>
      <button
        className={botaoClicado === "Sobremesas" ? estilos.btnClicado : ""}
        onClick={() => handleFiltrarProdutoCategoria("Sobremesas")}>
        <Image className={estilos.img} src={sobremesa} alt="Sobremesas" />
        <span>Sobremesas</span>
      </button>
    </section>
  )
}