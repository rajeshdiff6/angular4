import { OnInit, HostListener, Directive, ElementRef, EventEmitter, Input } from '@angular/core';

@Directive({
	selector: '[colordir]'
})

export class Colorcustomdirective implements OnInit{

	constructor(private el: ElementRef) {
  }

  @Input('colordir') colordirvalue: string;

  ngOnInit(): void {
    //this.colordirvalue = 'red';
    this.el.nativeElement.style.backgroundColor = this.colordirvalue;
  }

	@HostListener('mouseenter') onMouseEnter () {
    this.highlight(this.colordirvalue);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.highlight('red');
  }

	private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
