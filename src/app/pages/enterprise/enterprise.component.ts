import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {MatButton} from '@angular/material/button'
@Component({
  selector: 'app-enterprise',
  imports: [MatButton],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.css'
})
export default class EnterpriseComponent implements AfterViewInit {
  @ViewChild('splineCanvas',{ static: true }) canvasRef! : ElementRef<HTMLCanvasElement>
async ngAfterViewInit() {
    const {Application} = await import('@splinetool/runtime')
    const canvas = this.canvasRef.nativeElement;
    const app = new Application(canvas)
    await app.load('https://prod.spline.design/XbhAUjjiSLgLmXdO/scene.splinecode')
    .then(()=>{
      console.log('Model Load Successfully')
    })
    .catch((err)=>{
      console.log("failed to load",err)
    })
}
}
