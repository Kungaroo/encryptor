// avoid 0 - 32

export const caeserDecryption = (word: string, offset: number) => {
  let ans = "";
  let charCode: number;
  
  offset = offset % 93;

  for(let i=0;i<word.length;i++){
    charCode = word.charCodeAt(i)-offset;

    if (charCode > 126) charCode = charCode - 126 + 32;
    if (charCode < 33) charCode = charCode + 126 - 32;

    ans+=String.fromCharCode(charCode);
  };

  return ans;
};

export const atbashDecryption = (word: string) => {
  let ans = "";

  for(let i=0;i<word.length;i++){
    ans+=String.fromCharCode(159 - (word.charCodeAt(i)));
  }

  return ans;
};

export const keyDecryption = (word: String, key: String) => {
  let ans = "";
  let j = 0;

  for (let i = 0; i < word.length; i++) {
    ans += word.charCodeAt(i) - key.charCodeAt(j);
    j++;
    if (j === key.length) j = 0;
  }

  return ans;
}