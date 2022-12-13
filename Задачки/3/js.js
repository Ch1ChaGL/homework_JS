'use strict';
//Задание 1
{
  const random = (min = 0, max) =>
    Math.round(Math.random() * (max - min) + min);
  console.log(random(3, 4));
  //Задание 2
  const generateKey = (length, characters) => {
    let answer = '';
    const ArrayOfCharacters = characters.split('');
    const size = characters.length;
    for (let i = 0; i < length; i++) {
      const num = random(0, size - 1);
      answer += ArrayOfCharacters[num];
    }
    return answer;
  };
  console.log(generateKey(16, 'ABSDefgHLK1234'));
}

//Задание 4
{
  // const IpV4 = '10.0.0.1';
  // const arrayipv4 = IpV4.split('.');
  // const newarr =  arrayipv4.map(item => +item);
  // console.dir(newarr);
  const IpV4 = (IpV4 = '127.0.0.1') => {
    const ArrIpV4 = (IpV4.split('.')).map(item => +item);
    let count = 3;
    for (const item of ArrIpV4.keys()) {
      if (count === 3) {
        ArrIpV4[item] = ArrIpV4[item] << 8 << 8 << 8;
        count--;
        continue;
      }
      if (count === 2) {
        ArrIpV4[item] = ArrIpV4[item] << 8 << 8;
        count--;
        continue;
      }
      if (count === 1) {
        ArrIpV4[item] <<= 8;
        count--;
        continue;
      }
    }
    return ArrIpV4.reduce((prev, curent) => prev + curent);
  };
  console.log(IpV4());
}
