import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculatir',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculatir.component.html',
  styleUrl: './calculatir.component.css'
})
export class CalculatirComponent {
  input1: number | null = null;
  input2: number | null = null;
  currentOperation: string = '+';
  result: number | null = null;
  totalOperations: number = 0;

  selectOperation(operation: string) {
    this.currentOperation = operation;
    this.calculateResults();
  }

  calculateResults() {
    // Ensure input1 and input2 are numbers before calculation
    if (this.input1 !== null && this.input2 !== null) {
      switch (this.currentOperation) {
        case '+':
          this.result = this.input1 + this.input2;
          break;
        case '-':
          this.result = this.input1 - this.input2;
          break;
        case '*':
          this.result = this.input1 * this.input2;
          break;
        case '/':
          // Prevent division by zero
          this.result = this.input2 !== 0 ? this.input1 / this.input2 : null;
          break;
      }
      this.totalOperations++;
    }
  }

  resetCalculator() {
    this.input1 = null;
    this.input2 = null;
    this.currentOperation = '+';
    this.result = null;
  }
}