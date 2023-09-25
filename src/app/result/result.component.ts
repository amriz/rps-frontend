import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Pick } from '../pick';
import { Score } from '../score';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  game: Game = new Game;
  scoring: Score = new Score;
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

      this.gameService.scoring().subscribe(
        {
          next: data => { 
            this.scoring = data;
          },
          error: error => console.log(error)
        }        
      )

      this.images = [
        'assets/images/rock.png',
        'assets/images/paper.png',
        'assets/images/scissor.png',
    ];
  }

  startAgain() {
    this.router.navigate(['start']);
  }

  resetScore() {
    this.scoring = new Score()
    this.gameService.resetScore(this.scoring).subscribe(
      {
        next: response => {
          this.router.navigate(['results']);
        },
        error: error => console.log(error)
      }
    );
  }

}
