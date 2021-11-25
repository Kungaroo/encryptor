//avoid 0 - 32

export const caeserEncryption = (word: string, offset: number) => {
  let ans = "";
  let charCode: number;

  offset = offset % 93;

  for(let i = 0; i < word.length; i++){
    if(word[i] === " ") {
      ans += " ";
      continue;
    }
    charCode = word.charCodeAt(i)+offset;

    if (charCode > 126) charCode = charCode - 126 + 32;
    if (charCode < 33) charCode = charCode + 126 - 32;

    ans+=String.fromCharCode(charCode);    
  };

  return ans;
};

export const atbashEncryption = (word: string) => {
  let ans = "";

  for (let i = 0; i < word.length; i++) {
    ans += String.fromCharCode((159-(word.charCodeAt(i))));
  };

  return ans;
};

export const keyEncryption = (word: string, key: string) => {
  let ans = "";
  let j = 0;
  let charCode: number;

  for (let i = 0; i < word.length; i++) {
    if(word[i] === " "){
      ans += " ";
      continue;
    }
    while(key[j] === " ") j++;

    charCode = word.charCodeAt(i) + key.charCodeAt(j);

    if (charCode > 126){
      while(charCode > 126) charCode -= 126;
    }
    
    if (charCode < 33){
      while(charCode < 33) charCode += 126;
    }

    ans += String.fromCharCode(charCode);

    j++;
    if (j === key.length) j = 0;
  }

  return ans;
}