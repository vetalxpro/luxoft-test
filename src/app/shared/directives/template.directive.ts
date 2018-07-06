import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit {
  @Input('appTemplate') name: string;

  constructor( public template: TemplateRef<any> ) {
  }

  ngOnInit() {
  }

  getName(): string {
    return this.name;
  }

}
