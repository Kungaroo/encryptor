export const isASCII = (word: string) => {
  for(var i=0;i<word.length;i++){
      if(word.charCodeAt(i)>127){
          return false;
      }
  }
  return true;
}