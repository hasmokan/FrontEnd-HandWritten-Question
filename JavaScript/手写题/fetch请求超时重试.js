const autoRefetch = (url = ``, times = 3, timeout = 5000) => {
  let currentFetch;

  const fetchWithTimeout = (url) => {
      const fetchPromise = fetch(url);
      const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('请求超时')), timeout)
      );

      return Promise.race([fetchPromise, timeoutPromise]);
  };

  const fetchAndRetry = () => {
      currentFetch = fetchWithTimeout(url);

      return currentFetch
          .then((res) => res.json())
          .catch((err) => {
              if (times > 0) {
                  times -= 1;
                  return fetchAndRetry();
              }
              throw err;
          });
  };

  return fetchAndRetry();
};

// 例子用法:
autoRefetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
