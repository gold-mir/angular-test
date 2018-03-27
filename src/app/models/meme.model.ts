export class Meme {
  public goodText: string;
  constructor(public text: string) {
    this.goodText = this.newGoodText();
  }

  newGoodText(): string {
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
    this.goodText = output.join("");
    return this.goodText;
  }

  setText(newText: string): void {
    this.text = newText;
    this.newGoodText();
  }
}
