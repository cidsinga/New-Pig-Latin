export function latinizer(word) {
  if (/[^a-z]/i.test(word)) return word;

  const sliceLength = word.includes("qu") ? 1 : 0;

  if ((word.length === 1) || (word.search(/[aeiou]/i) === 0)) {
    return (word + "way");
  }
  else {
    const firstVowelIndex = word.search(/[aeiouy]/i);
    return ( word.slice(firstVowelIndex + sliceLength) + word.slice(0, firstVowelIndex + sliceLength) + "ay" );
  }
}

export function toPigLatin(sentence) {
  return sentence.split(" ").map(
    (word) => {return latinizer(word)}
    ).join(" ");
}
