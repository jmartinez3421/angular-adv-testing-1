import {EventEmitter} from "@angular/core";

export class Player2{
  hp: number;
  hpChanges = new EventEmitter<number>();

  constructor(){
    this.hp = 100;
  }

  takesDamage( damage: number ){
    if( damage >= this.hp ){
      this.hp = 0;
    }else{
      this.hp -= damage;
    }

    this.hpChanges.emit(this.hp);
  }
}
