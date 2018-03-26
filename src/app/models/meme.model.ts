export class Meme {
  constructor(public text: string) {}

  mAKeTExtgOod(): string {
    let lower: string = this.text.toLowerCase();
    let chars: string[] = lower.split("");
    let output: string[] = [];
    chars.forEach(function(item){
      if(Math.random() >= 0.5){
        output.push(item.toUpperCase());
      } else {
        output.push(item);
      }
    });
    return output.join("");
  }
}
