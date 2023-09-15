import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";

const appTemplate = `
  <div>  
    <news></news>
    <news-list></news-list>
  </div>
`;
@ComponentMetadata({
  selector: "app-root",
  template: appTemplate,
})
export class AppComponent extends BaseComponent {}
