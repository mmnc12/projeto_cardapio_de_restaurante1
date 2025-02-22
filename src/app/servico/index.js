import { produtos } from "../data";


export const retornaProdutos = () => {
  return produtos;
};


export const filtraCategoria = (categoria) => {
  return produtos.filter((produto) => produto.categoria === categoria);
};

export const buscaProduto = (textoDigitado) => {
  return produtos.filter((produto) => 
    produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};