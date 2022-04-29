import React, {useState} from "react";
import Styles from "../Estilos/Style.css"

export default function PostItem(props){
    
  
    return(
        <div className="post" id="Post">
            <div className="imgDiv">                
                <img src={props.imagem} className="imagem"/>
            </div>
            <div className="infos">
                <h2>{props.titulo}</h2>
                <p>{props.desc}</p>
                <p>Nota: {props.nota}/5</p>
                <h2>Preço: ${props.price}</h2>
            </div>
        </div>
    );
}