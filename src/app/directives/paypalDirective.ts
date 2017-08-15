import { OnInit, HostListener, Directive, ElementRef, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: 'colordir'
})

export class Colorcustomdirective implements OnInit{

  constructor(private el: ElementRef) {}

  @Input() colordirvalue: string;
  @Input() product: Object;

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.colordirvalue;

    this.el.nativeElement.innerHTML = 'hai<form action="https://www.paypal.com/cgi-bin/webscr" method="post">\n' +
      '  <input type="hidden" name="cmd" value="_cart">\n' +
      '  <input type="hidden" name="business" value="seller@designerfotos.com">\n' +
      '  <input type="hidden" name="item_name" value="'+this.product+'">\n' +
      '  <input type="hidden" name="item_number" value="123">\n' +
      '  <input type="hidden" name="amount" value="'+this.product+'">\n' +
      '  <input type="hidden" name="first_name" value="John">\n' +
      '  <input type="hidden" name="last_name" value="Doe">\n' +
      '  <input type="hidden" name="address1" value="9 Elm Street">\n' +
      '  <input type="hidden" name="address2" value="Apt 5">\n' +
      '  <input type="hidden" name="city" value="Berwyn">\n' +
      '  <input type="hidden" name="state" value="PA">\n' +
      '  <input type="hidden" name="zip" value="19312">\n' +
      '  <input type="hidden" name="night_phone_a" value="610">\n' +
      '  <input type="hidden" name="night_phone_b" value="555">\n' +
      '  <input type="hidden" name="night_phone_c" value="1234">\n' +
      '  <input type="hidden" name="email" value="jdoe@zyzzyu.com">\n' +
      '  <input type="image" name="submit"\n' +
      '    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"\n' +
      '    alt="PayPal - The safer, easier way to pay online">\n' +
      '</form>';
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.highlight(this.colordirvalue);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
