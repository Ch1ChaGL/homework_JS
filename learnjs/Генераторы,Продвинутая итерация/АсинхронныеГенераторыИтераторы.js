'use strict';


const range = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};


(async () => {
  for await (const value of range) {
    console.log(value);
  }
})();


console.log('Конец');



async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
    yield i;
  }
}

(async () => {
  for await (const value of generateSequence(5, 10)) {
    console.log(value);
  }
})();



const range2 = {
  from: 10,
  to: 15,
  async *[Symbol.asyncIterator]() {
    for (let i = this.from; i <= this.to; i++) {
      await new Promise(resolve => setTimeout(() => resolve(), 1000));
      yield i;
    }
  }
};


(async () => {
  for await (const value of range2) {
    console.log(value);
  }
})();




async function* fetchCommits(repo) {
  let url =  `https://api.github.com/repos/${repo}/commits`;
  while (url) {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Our cript' }
    });

    const body = response.json();

    let nexPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nexPage = nexPage && nexPage[1];
    url = nexPage;

    for (const commit of body) {
      yield commit;
    }
  }
}



