import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDirective } from './directives/template.directive';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    TemplateDirective
  ],
  exports: [
    PipesModule,
    TemplateDirective
  ]
})
export class SharedModule {
}
