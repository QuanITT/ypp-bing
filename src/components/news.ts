import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";
import { Channel } from "../models/Channel";
import News from "../models/News";
import { formatDate } from "../utils/formatDate";

@ComponentMetadata({
  selector: "news",
  template: `
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={{news.imgUrl}} alt="images news">  
    <channel data="news.channel" ></channel>
        <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
    </div>
 
  `,
})
export class NewsComponent extends BaseComponent {
  news: News = {
    title: "Câu Chuyện Hàng Đầu",
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVeW_8Wzry5DgMyyuFiA-n3K1Xeu65SsxoHZUkLrr6w&s",
    channel: {
      name: "Báo Thanh Niên",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVeW_8Wzry5DgMyyuFiA-n3K1Xeu65SsxoHZUkLrr6w&s",
      publishAt: formatDate(new Date()),
    },
  }

}