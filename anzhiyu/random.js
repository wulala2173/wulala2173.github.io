var posts=["2024/01/08/2023-12-12-blog/","2024/01/30/2023-12-27/","2024/01/03/hello-world/","2024/03/15/jiao-zhao/","2023/12/30/log/","2024/01/09/some-linear-algebra/","2024/01/30/xie-algebra/","2024/03/08/xin-gao-kao/","2024/03/15/shifenxi-t/","2024/04/11/film-review/","2024/04/30/some feel/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };