export const PIECES = {
  EMPTY: 0,
  bP: 1,
  bL: 2,
  bN: 3,
  bS: 4,
  bG: 5,
  bB: 6,
  bR: 7,
  bK: 8,
  tP: 9,
  tL: 10,
  tN: 11,
  tS: 12,
  tG: 13,
  tB: 14,
  tR: 15,
  tK: 16
};

export const BOARD_SQS = 121;

export const FILES = {
  FILE_A: 0,
  FILE_B: 1,
  FILE_C: 2,
  FILE_D: 3,
  FILE_E: 4,
  FILE_F: 5,
  FILE_G: 6,
  FILE_H: 7,
  FILE_I: 8,
  FILE_NONE: 9
};

export const COLOURS = {
  BOTTOM: 0,
  TOP: 1
};

export const RANKS = {
  RANK_1: 0,
  RANK_2: 1,
  RANK_3: 2,
  RANK_4: 3,
  RANK_5: 4,
  RANK_6: 5,
  RANK_7: 6,
  RANK_8: 7,
  RANK_9: 8,
  RANK_NONE: 9
};

export const PceChar = ' plnsgbrkPLNSGBRK';

export const RankChar = '123456789';

export const FileChar = 'abcdefghi';

export const START_FEN = 'LNSGKGSNL/1R5B1/PPPPPPPPP/9/9/9/ppppppppp/1b5r1/lnsgkgsnl ';

export const SQUARES = {
  A1: 13, B1: 14, C1: 15, D1: 16, E1: 17, F1: 18, G1: 19, H1: 20, I1: 21,
  A2: 24, B2: 25, C2: 26, D2: 27, E2: 28, F2: 29, G2: 30, H2: 31, I2: 32,
  A3: 35, B3: 36, C3: 37, D3: 38, E3: 39, F3: 40, G3: 41, H3: 42, I3: 43,
  A4: 46, B4: 47, C4: 48, D4: 49, E4: 50, F4: 51, G4: 52, H4: 53, I4: 54,
  A5: 57, B5: 58, C5: 59, D5: 60, E5: 61, F5: 62, G5: 63, H5: 64, I5: 65,
  A6: 68, B6: 69, C6: 70, D6: 71, E6: 72, F6: 73, G6: 74, H6: 75, I6: 76,
  A7: 79, B7: 80, C7: 81, D7: 82, E7: 83, F7: 84, G7: 85, H7: 86, I7: 87,
  A8: 90, B8: 91, C8: 92, D8: 93, E8: 94, F8: 95, G8: 96, H8: 97, I8: 98,
  A9: 101, B9: 102, C9: 103, D9: 104, E9: 105, F9: 106, G9: 107, H9: 108, I9: 109,
  OFFBOARD: 200
};

export function fr2sq(file, rank) {
  return ((13 + file) + (11 * rank));
}

