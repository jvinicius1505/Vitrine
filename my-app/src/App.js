import React, { useState } from "react";
import PostList from "./Componentes/Postlist";
import posts from "./Componentes/Posts";
import Header from "./Componentes/Header";


function App() {
  
  let minimo = document.querySelector(".minimo")
  let maximo = document.querySelector(".maximo")
  let limparB = document.querySelector(".limpar")
  
  const [min, setMin] = useState(Number.NEGATIVE_INFINITY)
  const [max, setMax] = useState(Number.POSITIVE_INFINITY)

  const [listProducts, setListProducts] = useState([...posts])
 
  function filtrar(){
    const prods_filter = listProducts.filter( p => {
      return p.price >= min && p.price <= max
    })

    if(prods_filter.length == 0){
      alert("Desculpe, não temos itens nessa faixa de preços.")
      return setListProducts([...posts])
    }

    else{
      setListProducts([...prods_filter])
      minimo.placeholder=min;
      maximo.placeholder=max;
      minimo.value="";
      maximo.value="";
      limparB.style.visibility ="visible"
    }
  }

  function limpar(){
    setListProducts([...posts])
    minimo.placeholder="Mínimo";
    maximo.placeholder="Máximo";
    minimo.value="";
    maximo.value="";
    limparB.style.visibility ="hidden"
  }

  return (
    <>
    <Header></Header>
    <div className="filtro">
      <input type="Number" className="minimo" placeholder="Mínimo" onChange={ e => setMin(e.target.value)} />
      <input type="Number" className="maximo" placeholder="Máximo" onChange={ e => setMax(e.target.value)} />
      <button onClick={filtrar} className="filtrar">filtrar</button>
      <button onClick={limpar} className="limpar">X</button>
    </div>


    <div className="post">
      <PostList listaPosts={listProducts}/>
    </div>
    </>
  );
}

export default App;