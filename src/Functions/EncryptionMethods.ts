export const caeserEncryption = (word: string, offset: number) => {
  let ans = "";
  let charCode;

  for(let i=0;i<word.length;i++){
    charCode = word.charCodeAt(i)+offset;

    while (charCode < 32) charCode += 127;
    while (charCode > 127) charCode -= 127;

    ans+=String.fromCharCode(charCode);    
  };

  return ans;
};

export const atbashEncryption = (word: string) => {
  let ans = "";

  for(let i=0;i<word.length;i++){
    ans+=String.fromCharCode((127-(word.charCodeAt(i)))+32);
  };

  return ans;
};