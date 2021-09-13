export const caeserDecryption = (word: string, offset: number) => {
  let ans = "";
  let charCode;
  
  for(let i=0;i<word.length;i++){
    charCode = word.charCodeAt(i)-offset;

    while (charCode < 0) charCode += 127;
    while (charCode > 127) charCode -= 127;

    ans+=String.fromCharCode(charCode);
  };

  return ans;
};

export const atbashDecryption = (word: string) => {
  let ans = "";

  for(let i=0;i<word.length;i++){
    ans+=String.fromCharCode((word[i].charCodeAt(0)+32));
  }

  return ans;
};