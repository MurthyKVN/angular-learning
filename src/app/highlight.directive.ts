import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.elementRef.nativeElement.style.background='cyan';
  }
  
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.elementRef.nativeElement.style.background='#fff';
  }
}
