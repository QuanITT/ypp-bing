import { BaseComponent } from "../base/component";
import { ComponentMetadata } from "../decorator/component";
import News from "../models/News";
import { formatDate } from "../utils/formatDate";
// import { News } from "../models/news";

@ComponentMetadata({
  selector: "news-list",
  template: `
    <div id="newsList">
      <div class="flex space-x-4">
        <ads *ngFor="let item of news" data="item"></ads>
      </div>
    </div>
  `,
})
export class NewsList extends BaseComponent {
  news: News[] = [
    {
      title: "Câu Chuyện Hàng Đầu",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVeW_8Wzry5DgMyyuFiA-n3K1Xeu65SsxoHZUkLrr6w&s",
      channel: {
        name: "Báo Thanh Niên",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVeW_8Wzry5DgMyyuFiA-n3K1Xeu65SsxoHZUkLrr6w&s",
        publishAt: formatDate(new Date()),
      },
    },
    
  ];
}
