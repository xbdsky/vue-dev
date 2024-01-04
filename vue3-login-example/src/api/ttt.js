const http = require("http")
http.get('http://www.baidu.com', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});



/*request({
  timeout:5000,   // 设置超时
  method:'GET',   //请求方式
  url:'xxx',//url
  qs:{                                                 //参数，注意get和post的参数设置不一样  
      xx:"xxx",
      xxx:"xxx",
      xxx:"xxx"
  }
   
},function (error, response, body) {
  if (!error && response.statusCode == 200) {
      console.log(body);
       
  }else{
      console.log("error");
  }
});*/

