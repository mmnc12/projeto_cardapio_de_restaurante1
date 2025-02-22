"use client";
import { useState } from "react";
import Image from "next/image";
import estilos from "./cards.module.css";
import { retornaProdutos } from "@/app/servico";


export default function Cards({ imagem, nome, categoria, descricao, preco, listaProduto }) {

  const formatarValorMoeda = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div className={estilos.cards}>
    {/* // <div className={estilos.cardsContainer}> */}
      {
        listaProduto.slice(0, 5).map((produto, index) => (
          <div key={produto.id} className={`${estilos.card} ${listaProduto.length === 1 ? estilos.fullWidth : (index < 3 ? estilos.col3 : estilos.col2)}`}>
            <figure className={estilos.figure}>
              <Image className={estilos.img} src={produto.imagem} alt={produto.nome} />
            </figure>
            <div className={estilos.texto}>
              <div>
                <h3>{produto.nome}</h3>
                <small>{produto.categoria}</small>
                <p>{produto.descricao}</p>
              </div>
              <div className={estilos.preco}>
                <span>{formatarValorMoeda(produto.preco)}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}