// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/users",
// ];
// async function fetchMultipleDataParallel(urls) {
//     const promises = urls.map(url => fetch(url));
    
//     // Ждем завершения всех запросов
//     const responses = await Promise.all(promises);
  
//     // Проверяем все ответы на ошибки
//     const jsonPromises = responses.map(async response => {
//       if (!response.ok) {
//         // Генерируем ошибку, если статус ответа не OK
//         const errorText = await response.text();
//         throw new Error(`Ошибка: ${response.status} ${response.statusText}. Ответ: ${errorText}`);
//       }
//       return response.json();
//     });
  
//     // Получаем данные из всех ответов
//     const data = await Promise.all(jsonPromises);
    
//     return data;
//   }
  
//   fetchMultipleDataParallel(urls)
//     .then(data => {
//       console.log("Полученные данные:", data);
//     })
//     .catch(error => {
//       console.error("Ошибка при получении данных:", error);
//     });

    // const urls = [
    //     "https://jsonplaceholder.typicode.com/todos",
    //     "https://jsonplaceholder.typicode.com/comments",
    //     "https://jsonplaceholder.typicode.com/users",
    //   ];
      
    //   async function fetchMultipleDataParallel(urls) {
    //     const promises = [];
      
    //     // Используем forEach для создания массива промисов
    //     urls.forEach(url => {
    //       promises.push(fetch(url));
    //     });
      
    //     // Ждем завершения всех запросов
    //     const responses = await Promise.all(promises);
      
    //     // Проверяем все ответы на ошибки
    //     const jsonPromises = responses.map(async response => {
    //       if (!response.ok) {
    //         // Генерируем ошибку, если статус ответа не OK
    //         const errorText = await response.text();
    //         throw new Error(`Ошибка: ${response.status} ${response.statusText}. Ответ: ${errorText}`);
    //       }
    //       return response.json();
    //     });
      
    //     // Получаем данные из всех ответов
    //     const data = await Promise.all(jsonPromises);
        
    //     return data;
    //   }
      
    //   fetchMultipleDataParallel(urls)
    //     .then(data => {
    //       console.log("Полученные данные:", data);
    //     })
    //     .catch(error => {
    //       console.error("Ошибка при получении данных:", error);
    //     });

    // Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер последовательно,
    //  используя цикл и await. Дождаться выполнения каждого запроса перед отправкой следующего и вернуть массив
    //   результатов в том порядке, в котором они были отправлены. 
      const urls = [ 'https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/cpmments', 'https://jsonplaceholder.typicode.com/users', ]
      urls.forEach(item => {
        fetch(item)
        .then
      })
