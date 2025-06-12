
  const texto = "Olá, sou o Ygor Nunes !";
  const elemento = document.getElementById("text-hero");
  const paragrafo = document.getElementById("text-cto");
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      if (i === texto.length - 1) {
        // Último caractere: aplicar destaque
        elemento.innerHTML += `<span class="destaque">${texto.charAt(i)}</span>`;
      } else {
        elemento.innerHTML += texto.charAt(i);
      }
      i++;
      setTimeout(digitar, 100);
    }
  }

  digitar();



  

  // Faz o parágrafo aparecer após 1 segundo
  setTimeout(() => {
    paragrafo.classList.add("show");
  }, 1000);