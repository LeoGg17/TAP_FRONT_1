export class Post{
  id?:Number;
  userId?:String;
  postName?:String;
  url?:String;
  userName?:String;
  descripcion?:String;
  voteCount?:Number;
  createdDate?:Date;
  idimagenModel?:Number;
  idSubreddit?:Number;
  comentarios?:CommentRequest[];
}
export class CommentRequest{
  id?:Number;
  userId?:String;
  userName?:String;
 comentario?:String;
 createdDate?:Date;
 idPost?:Number;
}
