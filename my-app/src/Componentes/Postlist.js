import React from "react";
import PostItem from "./Postitem";


export default function PostList(props){
    return(
        <ul>
            {props.listaPosts.map(p => {
                return(
                    <PostItem
                        titulo={p.title}
                        desc={p.description}
                        price={p.price}
                        nota={p.rating.rate}
                        imagem={p.image}
                    />
                );
            })}            
        </ul>
    );
}