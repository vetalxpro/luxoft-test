import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MetaLoader, MetaModule, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const metaFactory = (): MetaLoader => {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'Luxoft Test',
    defaults: {}
  });
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
