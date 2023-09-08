import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";

@ComponentMetadata({
  selector: "channel",
  template: "<span>{{name}}</span>",
})
export class ChannelComponent extends BaseComponent {
  name = "VTC";
}
