import { Component, OnInit } from '@angular/core';
import { SudokuSolver } from '@jlguenego/sudoku-generator';
import { timer } from 'rxjs';

import { Sudoku } from './sudoku/sudoku';
import { MatDialog } from '@angular/material';
import { FinishedDialogComponent } from './finished-dialog/finished-dialog.component';

export type Difficulty = 'easy' | 'moderate' | 'hard' | 'expert';

@Component({
  selector: 'su-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sudoku: Sudoku;
  elapsedTime: number;
  difficulty: Difficulty = 'easy';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    const solution = SudokuSolver.generate();
    const masked = SudokuSolver.carve(solution, this.numberOfEmptyFields);

    this.sudoku = solution.map(row => row.map(number => ({answer: number})));

    masked.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        this.sudoku[rowIndex][colIndex].value = value === 0 ? undefined : value;
        this.sudoku[rowIndex][colIndex].readonly = value !== 0;
      });
    });

    timer(0, 1000).subscribe(time => this.elapsedTime = time);
  }

  onGameFinished() {
    this.dialog
      .open(FinishedDialogComponent, {data: {time: this.elapsedTime}})
      .afterClosed()
      .subscribe(() => this.generate());
  }

  private get numberOfEmptyFields(): number {
    switch (this.difficulty) {
      case 'easy':
        return 35;
      case 'moderate':
        return 45;
      case 'hard':
        return 52;
      case 'expert':
        return 58;
    }
  }
}