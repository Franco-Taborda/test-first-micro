/* eslint-disable max-len */
/* eslint-disable prettier/prettier */

// import { Coordinate } from "../models/grid.interface";

// export enum Shapes { A = 'A', B = 'B', C = 'C', D = 'D', E = 'E', F = 'F', G = 'G', H = 'H', I = 'I', J = 'J', K = 'K', L = 'L', M = 'M', N = 'N', O = 'O', P = 'P', Q = 'Q', R = 'R', S = 'S', T = 'T', U = 'U', V = 'V', W = 'W', X = 'X', Y = 'Y', Z = 'Z' };

export const SIDES = {
  L: ['c0r0', 'c0r1', 'c0r2', 'c0r3', 'c0r4', 'c0r5', 'c0r6'],
  R: ['c4r0', 'c4r1', 'c4r2', 'c4r3', 'c4r4', 'c4r5', 'c4r6'],
  T: ['c0r0', 'c1r0', 'c2r0', 'c3r0', 'c4r0'],
  B: ['c0r6', 'c1r6', 'c2r6', 'c3r6', 'c4r6'],
  L_NC: ['c0r1', 'c0r2', 'c0r3', 'c0r4', 'c0r5'],
  R_NC: ['c4r1', 'c4r2', 'c4r3', 'c4r4', 'c4r5'],
  T_NC: ['c1r0', 'c2r0', 'c3r0'],
  B_NC: ['c1r6', 'c2r6', 'c3r6'],
}

// export const SHAPES_COORDINATES: Coordinate = {
export const SHAPES_COORDINATES = {
  A: ['c0r6', 'c0r5', 'c0r4', 'c0r3', 'c0r2', 'c1r1', 'c2r0', 'c3r1', 'c4r2', 'c4r3', 'c4r4', 'c4r5', 'c4r6', 'c1r3', 'c2r3', 'c3r3'],
  B: [...SIDES.L, ...SIDES.T_NC, ...SIDES.B_NC, 'c3r1', 'c3r2', 'c3r3', 'c3r4', 'c3r5', 'c1r3', 'c2r3', 'c4r1', 'c4r3', 'c4r5'],
  C: [...SIDES.L_NC, ...SIDES.T, ...SIDES.B, 'c4r1', 'c4r5'],
  D: [...SIDES.L, ...SIDES.T_NC, ...SIDES.B_NC, ...SIDES.R_NC],
  E: [...SIDES.L_NC, ...SIDES.T, ...SIDES.B, 'c1r3', 'c2r3', 'c3r3'],
  F: [...SIDES.T, ...SIDES.L_NC, 'c0r6', 'c1r3', 'c2r3', 'c3r3'],
  G: [...SIDES.L, ...SIDES.T_NC, 'c4r0', 'c4r1', ...SIDES.B_NC, 'c4r6', 'c4r5', 'c4r4', 'c3r4', 'c2r4'],
  H: [...SIDES.L, ...SIDES.R, 'c1r3', 'c2r3', 'c3r3'],
  I: [...SIDES.T, ...SIDES.B, 'c2r1', 'c2r2', 'c2r3', 'c2r4', 'c2r5'],
  J: [...SIDES.R, ...SIDES.B_NC, 'c0r6', 'c0r5', 'c0r4'],
  K: [...SIDES.L, 'c4r0', 'c3r1', 'c2r2', 'c1r3', 'c2r4', 'c3r5', 'c4r6'],
  L: [...SIDES.L, ...SIDES.B_NC, 'c4r6'],
  M: [...SIDES.L, ...SIDES.R, 'c1r1', 'c2r2', 'c3r1'],
  N: [...SIDES.L, ...SIDES.R, 'c1r2', 'c2r3', 'c3r4'],
  O: [...SIDES.L, ...SIDES.T_NC, ...SIDES.R, ...SIDES.B_NC],
  R: [...SIDES.L, ...SIDES.T_NC, 'c4r1', 'c4r2', 'c3r3', 'c2r3', 'c1r3', 'c2r4', 'c3r5', 'c4r6'],
  P: [...SIDES.L, ...SIDES.T_NC, 'c4r1', 'c4r2', 'c3r3', 'c2r3', 'c1r3'],
  Q: [...SIDES.L, ...SIDES.T_NC, ...SIDES.R, ...SIDES.B_NC, 'c2r5'],
  S: [...SIDES.T, ...SIDES.B, 'c4r1', 'c0r1', 'c0r2', 'c0r3', 'c1r3', 'c2r3', 'c3r3', 'c4r3', 'c4r4', 'c4r5', 'c0r5'],
  T: [...SIDES.T, 'c2r1', 'c2r2', 'c2r3', 'c2r4', 'c2r5', 'c2r6'],
  U: [...SIDES.L, ...SIDES.R, ...SIDES.B_NC],
  V: ['c0r0', 'c0r1', 'c0r2', 'c0r3', 'c0r4', 'c1r5', 'c2r6', 'c3r5', 'c4r4', 'c4r3', 'c4r2', 'c4r1', 'c4r0'],
  W: [...SIDES.L_NC, ...SIDES.R_NC, 'c0r0', 'c4r0', 'c1r6', 'c2r5', 'c3r6', 'c4r5'],
  X: ['c0r0', 'c1r1', 'c2r2', 'c3r1', 'c4r0', 'c2r3', 'c2r4', 'c0r6', 'c1r5', 'c2r4', 'c3r5', 'c4r6'],
  Y: ['c0r0', 'c1r1', 'c2r2', 'c3r1', 'c4r0', 'c2r3', 'c2r4', 'c2r5', 'c2r6'],
  Z: [...SIDES.T, ...SIDES.B, 'c4r1', 'c3r2', 'c2r3', 'c1r4', 'c0r5'],
};
