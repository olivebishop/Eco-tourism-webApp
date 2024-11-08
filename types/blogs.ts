export interface BlogPost {
  _id: string;
  title: string;
  author: string;
  content: string;
  tags: string[];
  imageUrl: {
    type: Buffer;
    data: number[];
  };
  createdAt: string;
}
