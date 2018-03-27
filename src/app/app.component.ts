import { Component } from '@angular/core';
import { Meme } from './models/meme.model';
import { Phaser } from 'phaser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app';

  public memes: Meme[] = [
    new Meme("I like memes"),
    new Meme("top text middle text bottom text"),
    new Meme("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  ]

  public activeMeme: Meme = null;

  setActiveMeme(meme: Meme){
    this.activeMeme = meme;
  }
  public thing: Phaser.Game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_canvas', {

  });
}
