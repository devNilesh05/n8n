import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from "@angular/material/button";
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [MatButton],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
@ViewChild('bgvideo') bgvideo! : ElementRef<HTMLVideoElement>;
 @ViewChild('splineCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
async ngAfterViewInit() {
    const { Application } = await import('@splinetool/runtime');
    // const video = this.bgvideo.nativeElement;
    // video.muted = true;
    // video.play().catch(err => console.log('autoplay blocked',err))
    const t2 = gsap.timeline()
    t2.from('.leftsection',{
      delay:2,
      opacity:0,
      x:-50,
      duration:1,
      ease:'power1.in'
    })
      t2.to('.hero',{
      y:-30,
      opacity:100,
      duration:1,
      ease:'power1.in'
    })
    t2.from('.rightsection',{
      opacity:0,
      x:50,
      duration:1,
      ease:'power1.in'
    })
    t2.from('.started',{
      opacity:0,
      y:30,
      duration:1,
      ease:'power1.in'
    })
    t2.from('.talk',{
      opacity:0,
      y:-30,
      duration:1,
      ease:'power1.in'
    })
    t2.from('.tag',{
      color:'white',
      duration:1,
      ease:'bounce.in',
      repeat:-1,
      yoyo:true
    })
    t2.to('.hero',{
      scale:1.1,
      opacity:0,
      duration:1
    })
    const canvas = this.canvasRef.nativeElement;
    const app = new Application(canvas);
     await app.load('https://prod.spline.design/ZAbdOQEK3F-0DYSv/scene.splinecode')
      .then(() => {
        console.log('Spline loaded successfully.');
      })
      .catch((err: any) => {
        console.error('Error loading Spline:', err);
      });
}

}
