

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
    let matriz = [["e", "𓀿"], ["i", "𓁢"], ["a", "𓀛"], ["o", "𓁼"], ["u", "𓂻"], ["b", "𓃬"], ["c", "𓍝"], ["d", "𓋹"], ["f", "𓊞"], ["g", "𓆃"], ["h", "𓂛"], ["j", "𓁱"], ["k", "𓁑"], ["l", "𓁃"], ["m", "𓅏"], ["n", "𓆀"], ["p", "𓉄"], ["q", "𓅔"], ["r", "𓆣"], ["s", "𓇈"], ["t", "𓇷"], ["v", "𓃠"], ["w", "𓂶"], ["x", "𓂲"], ["y", "𓂦"], ["z", "𓃯"], ["ç", "𓄰"]];
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
    /*let matriz = [[𓀿.toString(), "e"], [𓁢.toString(), "i"], [𓀛.toString(), "a"], [𓁼.toString(), "o"], [𓂻.toString(), "u"] [𓃬.toString(), "b"], [𓍝.toString(), "c"], [𓋹.toString(), "d"], [𓊞.toString(), "f"], [𓆃.toString(), "g"], [𓂛.toString(), "h"], [𓁱.toString(), "j"], [𓁑.toString(), "k"], [𓁃.toString(), "l"], [𓅏.toString(), "m"], [𓆀.toString(), "n"], [𓉄.toString(), "p"], [𓅔.toString(), "q"], [𓆣.toString(), "r"], [𓇈.toString(), "s"], [𓇷.toString(), "t"], [𓃠.toString(), "v"], [𓂶.toString(), "w"], [𓂲.toString(), "x"], [𓂦.toString(), "y"], [𓃯.toString(), "z"], [𓄰.toString(), "ç"]];*/
    let matriz = [[String.fromCodePoint(0x13000), "e"], [String.fromCodePoint(0x13014), "i"], [String.fromCodePoint(0x13006), "a"], [String.fromCodePoint(0x1303c), "o"], [String.fromCodePoint(0x130f3), "u"] ["b", String.fromCodePoint(0x1313c)], [String.fromCodePoint(0x13d52), "c"], [String.fromCodePoint(0x13abf), "d"], [String.fromCodePoint(0x13a1e), "f"], [String.fromCodePoint(0x13c43), "g"], [String.fromCodePoint(0x1305b), "h"], [String.fromCodePoint(0x13031), "j"], [String.fromCodePoint(0x1302d), "k"], [String.fromCodePoint(0x13023), "l"], [String.fromCodePoint(0x1340f), "m"], [String.fromCodePoint(0x13c00), "n"], [String.fromCodePoint(0x13804), "p"], [String.fromCodePoint(0x1340c), "q"], [String.fromCodePoint(0x13c32), "r"], [String.fromCodePoint(0x13c48), "s"], [String.fromCodePoint(0x13c37), "t"], [String.fromCodePoint(0x13121), "v"], [String.fromCodePoint(0x130f6), "w"], [String.fromCodePoint(0x130f2), "x"], [String.fromCodePoint(0x130ee), "y"], [String.fromCodePoint(0x1312f), "z"], [String.fromCodePoint(0x13150), "ç"]];
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

    