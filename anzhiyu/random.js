var posts=["2024/01/03/hello-world/","2024/01/08/2023-12-12-blog/","2024/01/09/some-linear-algebra/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };