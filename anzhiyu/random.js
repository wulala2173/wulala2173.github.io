var posts=["2024/01/08/2023-12-12-blog/","2024/01/30/2023-12-27/","2024/01/03/hello-world/","2023/12/30/log/","2024/01/09/some-linear-algebra/","2024/01/30/xie-algebra/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };