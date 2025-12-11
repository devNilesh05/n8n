import { AfterViewInit, Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import gsap from 'gsap'
@Component({
  selector: 'app-navbar',
  imports: [MatButton],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

ngAfterViewInit() {
  const navLogo = document.querySelector(".logo") as HTMLElement;
  const rect = navLogo.getBoundingClientRect();
  const t1 = gsap.timeline()
   t1.set('.intro-logo',{opacity:1,scale:4})
   .to('.intro-logo',{
    duration:1.2,
    scale:0.5,
    ease:'power3.out'
   })
   .to('.intro-logo', {
        duration: 0.8,
        x: rect.left - window.innerWidth / 2 + rect.width / 2,
        y: rect.top - window.innerHeight / 2 + rect.height / 2,
        ease: "power4.inOut",
        opacity:0
      })
      .from('.logo',{
        opacity:0,
        duration:0.3
      })
      .from(".nav-item, .nav-item *", {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.2");
}
}
