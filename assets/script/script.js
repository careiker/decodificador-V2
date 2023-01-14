

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
    let matriz = [["e", "ecma"], ["i", "net"], ["a", "app"], ["o", "devops"], ["u", "linux"], ["b", "bit"], ["c", "++"], ["d", "dom"], ["f", "flutter"], ["g", "bug"], ["h", "php"], ["j", "oracle"], ["k", "stack"], ["l", "laravel"], ["m", "mozilla"], ["n", "next"], ["p", "postgresql"], ["q", "query"], ["r", "react"], ["s", "sass"], ["t", "thumbnail"], ["v", "vue"], ["w", "wordwideweb"], ["x", "excel"], ["y", "typescript"], ["z", "i=0"], ["ç", "undefined"]];
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
    let matriz = [["ecma", "e"], ["net", "i"], ["app", "a"], ["devops", "o"], ["linux", "u"] ["bit", "b"], ["++", "c"], ["dom", "d"], ["flutter", "f"], ["bug", "g"], ["php", "h"], ["oracle", "j"], ["stack", "k"], ["laravel", "l"], ["mozilla", "m"], ["next", "n"], ["postgresql", "p"], ["query", "q"], ["react", "r"], ["sass", "s"], ["thumbnail", "t"], ["vue", "v"], ["wordwideweb", "w"], ["excel", "x"], ["typescript", "y"], ["i=0", "z"], ["undefined", "ç"]];
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

    