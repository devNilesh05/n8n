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
ngAfterViewInit() {
    const video = this.bgvideo.nativeElement;
    video.muted = true;
    video.play().catch(err => console.log('autoplay blocked',err))
    const t2 = gsap.timeline()
    t2.from('.leftsection',{
      opacity:0,
      x:-50,
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
}

}
