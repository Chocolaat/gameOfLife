import { Component } from "@angular/core";
import { AgRendererComponent } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";


@Component({
  selector: 'game-cell-renderer',
  template: ``,
})
export class GameCellRenderer implements AgRendererComponent {
  refresh(params: ICellRendererParams): boolean {
      throw new Error("Method not implemented.");
  }
  private params!: ICellRendererParams;
  private displayValue!: string;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.displayValue = new Array(params.value).fill('#').join('');
  }
  

  medalUserFunction() {
    console.log(
      `user function called for medal column: row = ${
        this.params.rowIndex
      }, column = ${this.params!.column!.getId()}`
    );
  }
}