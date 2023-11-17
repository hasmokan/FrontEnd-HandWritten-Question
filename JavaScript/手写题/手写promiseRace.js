function PromiseRace(promises){
    return new Promise((resolve, reject) => {
        for(let promise of promises){
            promise.then(resolve, reject)
        }
    })
}

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('p1 延时一秒')
    }, 1000);
  });
  
const p2 = new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve('p2 延时两秒')
}, 2000);
});

PromiseRace([p1,p2]).then(res=>console.log(res)).catch(err=>console.log(err));
// 1秒后打印   p1 延时一秒

