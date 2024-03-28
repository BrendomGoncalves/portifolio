import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'portifoliodev';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      if (event.target.matches('.nav-link')) {
        const button = this.el.nativeElement.querySelector('.btn-close');
        button.click();
      }
    });
  }

}
