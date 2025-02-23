'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import banner from "../../public/banner.png";
import Categorias from "./componentes/Categorias";
import CampoDeBusca from "./componentes/CampoDeBusca";
import { buscaProduto, filtraCategoria, retornaProdutos } from "./servico";
import Cards from "./componentes/Cards";
import entrada from "../../public/entrada.png";
import massa from "../../public/massa.png";
import carne from "../../public/carne.png";
import bebidas from "../../public/bebidas.png";
import salada from "../../public/salada.png";
import sobremesa from "../../public/sobremesa.png";

export default function Home() {

  const [listaProduto, setListaProduto] = useState(retornaProdutos());

  const [botaoClicado, setBotaoClicado] = useState(null);

  const [textoBusca, setTextoBusca] = useState("");


  return (
    <div className={estilos.page}>
      <header className={estilos.topo}>
        <Image className={estilos.banner} src={banner} alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
      </header>
      <main className={estilos.conteudo_pricipal}>
        <Categorias
          setListaProduto={setListaProduto}
          setBotaoClicado={setBotaoClicado}
          botaoClicado={botaoClicado}
          setTextoBusca={setTextoBusca}
          className={estilos.container_categoria}
        />

        <CampoDeBusca
          setListaProduto={setListaProduto}
          setBotaoClicado={setBotaoClicado}
          textoBusca={textoBusca}
          setTextoBusca={setTextoBusca}
        />
        <div className={estilos.maim}>
          <section className={estilos.secao_cards}>
            <h2>Cardápio</h2>
            <div className={estilos.cards}>
              <Cards listaProduto={listaProduto} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
