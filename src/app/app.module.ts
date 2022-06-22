import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { GhButtonComponent, MdoGithubButtonComponent, NtkmeButtonComponent} from '@ctrl/ngx-github-buttons';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [GhButtonComponent, MdoGithubButtonComponent, NtkmeButtonComponent],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const ngElement = createCustomElement(GhButtonComponent, {
      injector: this.injector
    });
    customElements.define('wc-gh-button', ngElement);
    const mdoNgElement = createCustomElement(MdoGithubButtonComponent, {
      injector: this.injector
    });
    customElements.define('wc-mdo-github-button', mdoNgElement);
    const ntkmeNgElement = createCustomElement(NtkmeButtonComponent, {
      injector: this.injector
    });
    customElements.define('wc-ntkme-github-button', ntkmeNgElement);
  }

}
