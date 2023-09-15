import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";

@ComponentMetadata({
  selector: "channel",
  template: `
    <div class="p-4 flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="{{data.icon}}" alt="iconImages">
                    </div>
                    <div>
                      <span>{{data.name}} - </span> 
                      <span>{{data.publishAt}}</span>
                    </div>
            `,
})
export class ChannelComponent extends BaseComponent {
  data;
}
