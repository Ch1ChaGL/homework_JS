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
/*Write an algorithm that will identify
valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets,
with values between 0 and 255, inclusive. */
{
  const isValidIP = str => {
    let count = 0;

    let array = str.split('.');
    const size = array.length;
    const array2 = str.split('.').map(item => +item);
    for (let i = 0; i < size; i++) {
      count++;
      if (!(array[i].length === String(array2[i]).length)) return false;
    }

    let flag = true;

    if (!(count === 4)) return false;
    array = str.split('.').map(item => +item);
    array.forEach(element => {
      if (!(element <= 255 && element >= 0)) {
        flag =  false;
      }
    });
    return flag;
  };
  console.log(isValidIP('0.0.0.0'));
}
