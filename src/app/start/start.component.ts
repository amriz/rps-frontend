import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Pick } from '../pick';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  player: string = "";
  picks: string[] = Object.keys(Pick);
  images: string[] = [];
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
      this.picks = this.picks.slice(this.picks.length/2); 
      this.images = [
          'assets/images/rock.png',
          'assets/images/paper.png',
          'assets/images/scissor.png',
      ];
  }

  startGame() {
    this.gameService.start(this.player).subscribe(
      {
        next: response => {
          this.router.navigate(['results']);
        },
        error: error => console.log(error)
      }
    );
  }

  startGameClick(playerpick: string) {
    this.gameService.start(playerpick).subscribe(
      {
        next: response => {
          this.router.navigate(['results'])
        },
        error: error => console.log(error)
      }
    )
  }

}
