import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";

@ComponentMetadata({
  selector: "ads",
  template: `
   <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-black">
            Câu Chuyện Hàng Đầu
        </h5>
        <ul class="space-y-4">
            <li class="rounded-lg shadow text-sm">
                <channel data="data.channel"></channel>
                <div>{{data.title}}</div>
            </li>
            <li class="rounded-lg shadow text-sm ">
                <channel data="data.channel"></channel>
            </li>
            <li class="rounded-lg shadow text-sm ">
                <channel data="data.channel"></channel>
            </li>
        </ul>

    </div>

  `,
})
export class AdsComponent extends BaseComponent {
  data;
}
