export const caeserDecryption = (word: string, offset: number) => {
  let ans = "";
  word = word.toLowerCase();
  
  for(let i=0;i<word.length;i++){
    let charCode = word.charCodeAt(i)-offset;

    while (charCode < 0) charCode += 127;

    ans+=String.fromCharCode(charCode);
  };

  return ans;
};

export const atbashDecryption = (word: string) => {
  let ans = "";
  word = word.toLowerCase();

  for(let i=0;i<word.length;i++){
    ans+=String.fromCharCode(97+(word[i].charCodeAt(0)-122)*(-1))
  }

  return ans;
};