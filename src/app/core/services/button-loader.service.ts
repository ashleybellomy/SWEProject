import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonLoaderService {

  loadButton(name: string, scene: Phaser.Scene) {
      scene.load.image('btn-' + name, location.href + 'assets/sprites/Menu Buttons/Large Buttons/Large Buttons/' + name + ' Button.png');
  }
}
