import * as vars from './vars';

export const GameBoard = {
  pieces: new Array(vars.BOARD_SQS),
  side: vars.COLOURS.BOTTOM,
};

export function resetBoard() {
  for (let i = 0; i < vars.BOARD_SQS; ++i) {
    GameBoard.pieces[i] = vars.SQUARES.OFFBOARD;
  }

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      GameBoard.pieces[13 + j + 11 * i] = vars.PIECES.EMPTY;
    }
  }
}

export function printBoard() {
  let sq;
  let file;
  let rank;
  let piece;
  const board = [];

  for (rank = vars.RANKS.RANK_9; rank >= vars.RANKS.RANK_1; rank--) {
    let line = '';
    const split = [];
    for (file = vars.FILES.FILE_A; file <= vars.FILES.FILE_I; file++) {
      sq = vars.fr2sq(file, rank);
      piece = GameBoard.pieces[sq];
      const pieceChar = vars.PceChar[piece];
      let player: number;
      if (pieceChar !== ' ') {
        if (pieceChar.toLowerCase() === pieceChar) {
          player = 0;
        } else {
          player = 1;
        }
      } else {
        player = undefined;
      }
      split.push({
        pos: sq,
        piece: pieceChar,
        player
      });
      line += vars.PceChar[piece];
    }

    board.push(split);
  }

  return board;
}

export function parseFen(fen) {
  resetBoard();

  let rank = vars.RANKS.RANK_9;
  let file = vars.FILES.FILE_A;
  let fenCnt = 0;
  let count = 0;
  let piece = 0;

  while (rank >= vars.RANKS.RANK_1 && fenCnt < fen.length) {
    count = 1;
    switch (fen[fenCnt]) {
      case 'p':
        piece = vars.PIECES.bP;
        break;
      case 'l':
        piece = vars.PIECES.bL;
        break;
      case 'n':
        piece = vars.PIECES.bN;
        break;
      case 's':
        piece = vars.PIECES.bS;
        break;
      case 'g':
        piece = vars.PIECES.bG;
        break;
      case 'b':
        piece = vars.PIECES.bB;
        break;
      case 'r':
        piece = vars.PIECES.bR;
        break;
      case 'k':
        piece = vars.PIECES.bK;
        break;
      case 'P':
        piece = vars.PIECES.tP;
        break;
      case 'L':
        piece = vars.PIECES.tL;
        break;
      case 'N':
        piece = vars.PIECES.tN;
        break;
      case 'S':
        piece = vars.PIECES.tS;
        break;
      case 'G':
        piece = vars.PIECES.tG;
        break;
      case 'B':
        piece = vars.PIECES.tB;
        break;
      case 'R':
        piece = vars.PIECES.tR;
        break;
      case 'K':
        piece = vars.PIECES.tK;
        break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        piece = vars.PIECES.EMPTY;
        count = Number(fen[fenCnt]);
        break;

      case '/':
      case ' ':
        rank--;
        file = vars.FILES.FILE_A;
        fenCnt++;
        continue;

      default:
        console.log('FEN error');
        return;
    }

    for (let i = 0; i < count; i++) {
      const sq120 = vars.fr2sq(file, rank);
      GameBoard.pieces[sq120] = piece;
      file++;
    }
    fenCnt++;
  }
}
