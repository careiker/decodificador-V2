

const inputTexto = document.querySelector(".input");
const mensagem = document.querySelector(".output");


/*FUNÇÕES DE CRIPTOGRAFIA*/

/*FUNÇÃO PARA BOTÃO DE CRIPTOGRAFAR*/
  function btnCrypt() {
    /*VERIFICA SE TEXTAREA ESTÁ VAZIO E ALERTA USUÁRIO */
    if (inputTexto.value.trim() === "") {
      alert("Por favor, insira um texto antes de usar a criptografia");
      return;
    }
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"

    /*DISPLAY PARA APARECER BOTÃO DE COPIAR */
    document.querySelector('.botao-copiar').style.display = 'block';
  }

  /*FUNÇÃO PARA CRIPTOGRAFAR*/
  function encriptar(stringEncriptada) {
    let matriz = [["a", "app"], ["c", "c#"], ["e", "ecma"], ["h", "html5"], ["i", "net"], ["o", "devops"], ["u", "linux"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++) {
      if(stringEncriptada.includes(matriz[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1])
      }
    }

    return stringEncriptada;
  }

 /*FUNÇÃO PARA BOTÃO DE DESCRIPTOGRAFAR*/
  function btnDescrypt() {
    /*VERIFICA SE TEXTAREA ESTÁ VAZIO E ALERTA USUÁRIO */
    if (inputTexto.value.trim() === "") {
      alert("Por favor, insira um texto antes de usar a descriptografia");
      return;
    }
    
    const textoDescriptado = descriptar(inputTexto.value)
    mensagem.value = textoDescriptado
    mensagem.style.backgroundImage = "none"
    
    /*DISPLAY PARA APARECER BOTÃO DE COPIAR */
    document.querySelector('.botao-copiar').style.display = 'block';
  }
 
  /*FUNÇÃO PARA DESCRIPTOGRAFAR*/
  function descriptar(stringDescriptada) {
    let matriz = [["app", "a"], ["c#", "c"], ["ecma", "e"], ["html5", "h"], ["net", "i"], ["devops", "o"], ["linux", "u"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++) {
      if(stringDescriptada.includes(matriz[i][0])) {
        stringDescriptada = stringDescriptada.replaceAll(matriz[i][0], matriz[i][1])
      }
    }

    return stringDescriptada;
  }

/*FUNÇÃO PARA BOTÃO COPIAR*/
const botaoCopiar = document.querySelector('.botao-copiar');
const alvoCopia = document.querySelector('.output');

  botaoCopiar.addEventListener('click', () => {
    alvoCopia.select();
    document.execCommand('copy');
    alert("Texto copiado!");
  });

    