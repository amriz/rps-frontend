import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Pick } from '../pick';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  game: Game = new Game;
  path: string = ""
  picks: string[] = Object.keys(Pick);
  images: string[] = [];
  constructor(private gameService: GameService, private router: Router){}

  ngOnInit(): void {      

      this.gameService.result().subscribe(
        {
          next: data => { 
            this.game = data;
          },
          error: error => console.log(error)
        }        
      )
     if (this.game.player.toString == Pick.ROCK.toString)
        {this.path = this.images[0]}
     else if (this.game.player.toString == Pick.PAPER.toString)
      { this.path = this.images[1]}
      else {this.path = this.images[2]}

      if (this.game.computer.toString == Pick.ROCK.toString)
      {this.path = 'assets/images/rock.png'}
      else if (this.game.computer.toString == Pick.PAPER.toString)
      { this.path = 'assets/images/paper.png'}
      else {this.path = 'assets/images/scissor.png'}

      this.images = [
        'assets/images/rock.png',
        'assets/images/paper.png',
        'assets/images/scissor.png',
    ];
  }

  startAgain() {
    this.router.navigate(['start']);
  }

}
