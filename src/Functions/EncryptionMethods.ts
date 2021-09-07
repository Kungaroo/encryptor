export const caeserEncryption = (word: string, offset: number) => {
  let ans = "";
  word = word.toLowerCase();

  for(let i=0;i<word.length;i++){
    let charCode = word[i].charCodeAt(0)+offset;

    while (charCode > 127) charCode -= 127;

    ans+=String.fromCharCode(charCode);    
  };

  return ans;
};

export const atbashEncryption = (word: string) => {
  let ans = "";
  word = word.toLowerCase();

  for(let i=0;i<word.length;i++){
    ans+=String.fromCharCode(122-(word[i].charCodeAt(0)-97));
  };

  return ans;
};