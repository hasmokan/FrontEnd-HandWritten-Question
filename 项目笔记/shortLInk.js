block = () => {
  const { shortLinkMap, history } = props
  history.block((location, action) => {
    if(action === 'POP') return true // 跳转到对应页面则直接放行
    const link = `${location.pathname}${location.hash}`
    const shotLink = findShortLink(shortLinkMap, link) // 找到短链
    if(!shotLink){
      return true
    }
    const pathName = shotLink ? link.replace(shotLink, shortLinkMap[shotLink]) : link
    return !!(() => {
      history.block(() => true)
      history.push({
        pathname: pathName,
        search: location.search,
        state: location.state,
      })
    })
  })
}

// 保存原始 window.open 函数  
const originalOpen = window.open;  
  
// 定义短链替换函数  
function replaceWithShortLink(url) {  
  // 这里只是一个示例，您需要根据实际情况实现短链替换逻辑  
  // 例如，您可以使用一个映射或API来查找和替换长链为短链  
  const shortLinkMap = {  
    'https://example.com/long-url': 'https://example.com/short-url'  
  };  
    
  return shortLinkMap[url] || url; // 如果找不到短链，则返回原始URL  
}  
  
// 覆盖 window.open 函数  
window.open = function(url, target, features) {  
  // 调用短链替换函数  
  const shortUrl = replaceWithShortLink(url);  
    
  // 如果URL已更改，则打印日志（可选）  
  if (shortUrl !== url) {  
    console.log(`Original URL: ${url} -> Short URL: ${shortUrl}`);  
  }  
    
  // 调用原始的 window.open 函数  
  return originalOpen.call(window, shortUrl, target, features);  
};