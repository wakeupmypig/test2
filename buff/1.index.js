/** 缓存区Buffer* TCP 文件 视频 需要处理二进制* node buffer 帮我们处理二进制* *///console.log(global)//var buffer = new Buffer(1);//TCP字节//buffer 0-255var sum = 0;for(var i=0 ; i<8; i++){    sum+= Math.pow(2,i);}console.log(sum);var buffer = new Buffer(1);buffer[0] =256;console.log(buffer);//默认是16进制来表示//如果大于255，则对256取值//如果小于0，则先摸上256在家256