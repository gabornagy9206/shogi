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
  turn = true;

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
    console.log(this.board);
  }

  resetBoard() {
    board.parseFen(vars.START_FEN);
    this.board = board.printBoard();
  }

  selectPiece(item) {
    if (item.piece !== ' ' && !this.itemSelected) {
      if (!!item.player === this.turn) {
        console.log(item);
        this.selectedItem = item;
        this.itemSelected = true;
      }
    } else if (this.itemSelected && item.piece === ' ') {
      item.piece = this.selectedItem.piece;
      this.selectedItem.piece = ' ';
      this.turn = !this.turn;
      this.itemSelected = false;
    }
  }
}
