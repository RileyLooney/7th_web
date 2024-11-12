import React, { useState } from 'react'; 

function TypingInput() {
    const name = nameElem.value;
    console.log(`입력된 이름: ${name}`)
}

const nameElem = document.getElementById('inputName')

nameElem.addEventListener("input", typingInput)