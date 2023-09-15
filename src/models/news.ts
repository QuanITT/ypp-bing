import { Channel } from "./Channel";

class News   {
  title: string;
  imgUrl: string;
  like?: number;
  unlike?: number;
  channel: Channel;

  constructor(
    title: string,
    imgUrl: string,
    channel: Channel
  ) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.channel = channel;
  }

}

export default News;
