//Cifrado César

let spanish = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function caesarCipher(code,words){
  let separateWords = words.toUpperCase().split("")
  return separateWords.map(letter => {

      if(letter.match(/[A-ZÑ]/g))
        return spanish[(spanish.indexOf(letter) + code) % 27]
      else
        return letter

  }).join("")
  return separateWords
 //cuando haga la interfaz acordarme de que el code en negativo es el decifrar
}
//Cifrado de Vigenère
  function vignereCipher(key,words,opt){
    let separateWords = words.toUpperCase().split("")
    let keyChar = ""
    let count = 0
    if(opt){ //cifrado
              return separateWords.map((letter,i) => {
                 if (!(letter.match(/[A-ZÑ]/g))){
                       count++
                        return letter
                  } 
                  
                   keyChar = key.charAt((i-count) % key.length).toUpperCase()
                  return spanish[(spanish.indexOf(letter) + spanish.indexOf(keyChar)) % 27]
                  
            }).join("")
        }
    else // decifrado
      {
              return separateWords.map((letter,i) => {
                if (!(letter.match(/[A-ZÑ]/g))){
                   count++
                    return letter
                }
                keyChar = key.charAt((i-count) % key.length).toUpperCase()
                    return spanish[((spanish.indexOf(letter) - spanish.indexOf(keyChar))+ 27) % 27]     
                  
          }).join("")
      }
    
  }
//Transposición Columnar

function columnarTransposition(key,words){
  let count = 0;
   let separateWords = words.toUpperCase().split("")
  let cols = key.length
  let rows = Math.ceil(separateWords.length / cols)
  const matrix = new Array(rows)
    .fill(null)
    .map(() => new Array(key.length).fill(''));
  

  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (count < separateWords.length) {
        matrix[j][i] = separateWords[count];
        count++;
      }
    }
  }
  return matrix
  
return Array.from(key).sort().join("")
 const sortedKey = Array.from(key).sort().join('');
  let encryptedText = '';
  for (let i = 0; i < cols; i++) {
    const colIndex = key.indexOf(sortedKey[cols]);
    for (let j = 0; j < rows; j++) {
      encryptedText += matrix[j][colIndex];
    }
  }

  return encryptedText;


}

