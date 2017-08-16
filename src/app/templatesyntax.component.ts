import { Component } from '@angular/core';

@Component({
  templateUrl: './templatesyntax.component.html',
  styles: ['.title{background-color:#ccc;}']
})

export class TemplatesyntaxComponent {
  title = 'Tempalte Syntax';
  hiddenprop = false;
  titleboolean = true;
  styleboolean = true;
  firstclass = true;
  secondclass = true;
  classes = {
    'firstclass' : this.firstclass,
    'secondclass' : this.secondclass
  };
}
