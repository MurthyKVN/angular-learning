import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective {

  constructor(elementRef:ElementRef, ) { }

}
