import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FCanvasComponent, FCreateConnectionEvent, FFlowModule } from '@foblex/flow';

interface FlowNode {
  id: string;
  label: string;
  x: number;
  y: number;
  inputs?: string[];
  outputs?: string[];
}

interface FlowConnection {
  outputId: string;
  inputId: string;
}

@Component({
  selector: 'app-flow-editor-component',
  standalone: true,
  imports: [FFlowModule],
  templateUrl: './flow-editor-component.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowEditorComponentComponent {
  // nodes: FlowNode[] = [
  //   { id: 'n1', label: 'Start', x: 60, y: 80, outputs: ['out1'] },
  //   { id: 'n2', label: 'Target', x: 360, y: 80, inputs: ['in1'] }
  // ];

  // connections: FlowConnection[] = [
  //   { outputId: 'out1', inputId: 'in1' }
  // ];

  // addNode() {
  //   const id = `n${Date.now()}`;
  //   this.nodes = [
  //     ...this.nodes,
  //     {
  //       id,
  //       label: `Node ${this.nodes.length + 1}`,
  //       x: 120 + this.nodes.length * 160,
  //       y: 160,
  //       outputs: [`out-${id}`],
  //       inputs: [`in-${id}`],
  //     },
  //   ];
  // }

  // exportJSON() {
  //   const payload = { nodes: this.nodes, connections: this.connections };
  //   console.log(JSON.stringify(payload, null, 2));
  // }

  @ViewChild(FCanvasComponent, { static: true })
  public fCanvas!: FCanvasComponent;

  public connections: { outputId: string, inputId: string }[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  public addConnection(event: FCreateConnectionEvent): void {
    if(!event.fInputId) {
      return;
    }
    this.connections.push({ outputId: event.fOutputId, inputId: event.fInputId });
    this.changeDetectorRef.detectChanges();
  }

  public onLoaded(): void {
    this.fCanvas.resetScaleAndCenter(false);
  }
}
