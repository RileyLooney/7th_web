import React from "react";

function Item({music}){
    return(
        <>
            <img src = {music.img} alt={music.title}/>
            <p>{music.title} - {music.singer}</p>
        </>
    )
}

export default Item;