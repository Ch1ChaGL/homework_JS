'use strict';


async function rejectNow(num) {
  try {
    return await fetch('http://no-such-url');
  } catch {
    return Promise.reject(new Error(num));
  }
}


// rejectNow(404)
//   .catch(data => alert(data));

// async function rejectNowWithoutTryCatch(num) {
//   const result =  await fetch('http://no-such-url');
// }

// rejectNowWithoutTryCatch(101)
//   .catch(() => console.log('Ошибка'));



//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }

//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404



// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status === 200) {
//     return await response.json();
//   }
//   throw new Error(response.status);
// }



class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new HttpError(response);
  }
}


// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  const name = prompt('Введите логин?', 'iliakan');
  try {

    const user = await loadJson(`https://api.github.com/users/${name}`);
    if (user) {
      alert(`Полное имя: ${user.name}.`);
      return user;
    }
  } catch (err) {
    if (err instanceof HttpError && err.response.status === 404) {
      alert('Такого пользователя не существует');
    } else {
      throw err;
    }
  }
}
demoGithubUser();
