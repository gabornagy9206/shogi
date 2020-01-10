import { Component, OnInit } from '@angular/core';
import * as vars from './vars';
import * as board from './board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shogi';
  FilesBrd = [];
  RanksBrd = [];
  public board;
  turn = false;
  moveValid = false;

  itemSelected = false;
  selectedItem;

  ngOnInit(): void {
    let sq = vars.SQUARES.A1;

    for (let i = 0; i < vars.BOARD_SQS; i++) {
      this.FilesBrd[i] = vars.SQUARES.OFFBOARD;
      this.RanksBrd[i] = vars.SQUARES.OFFBOARD;
    }

    for (let rank = vars.RANKS.RANK_1; rank <= vars.RANKS.RANK_9; ++rank) {
      for (let file = vars.FILES.FILE_A; file <= vars.FILES.FILE_I; ++file) {
        sq = vars.fr2sq(file, rank);

        this.FilesBrd[sq] = file;
        this.RanksBrd[sq] = rank;
      }
    }

    board.parseFen(vars.START_FEN);
    this.board = board.printBoard();
  }

  resetBoard() {
    board.parseFen(vars.START_FEN);
    this.board = board.printBoard();
    console.log(this.board);
  }

  selectPiece(item) {
    if (item.piece !== ' ' && !this.itemSelected) {
      if (!!item.player === this.turn) {
        this.selectedItem = item;
        this.itemSelected = true;
        console.log(item);
      }
    } else if (this.itemSelected && item.piece === ' ') {
      if (this.calculateMoveIsValid(item, this.selectedItem)) {
        item.piece = this.selectedItem.piece;
        this.selectedItem.piece = ' ';
        this.turn = !this.turn;
        this.itemSelected = false;
        this.selectedItem = undefined;
        console.log(item);
        this.moveValid = false;
      } else {
        this.selectedItem = undefined;
        this.itemSelected = false;
      }
    }
  }

  calculateMoveIsValid(item, selectedItem): boolean {
    console.log('calcing');
    console.log(item);
    switch (selectedItem.piece) {
      case 'p':
        if (item.pos - 11 === this.selectedItem.pos) {
          return true;
        } else {
          return false;
        }

      case 'P':
        if (item.pos + 11 === this.selectedItem.pos) {
          return true;
        } else {
          return false;
        }

      case 'l':
        // Éppen ide írtam volna a validáló fgvt.
        return true;

      default:
        return true;
    }
  }
}
