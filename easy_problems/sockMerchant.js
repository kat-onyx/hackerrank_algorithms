function sockMerchant(n, ar) {
  let socksHash = {};

  for (let i = 0; i < ar.length; i++) {
    let currentColor = ar[i];
    if (socksHash[currentColor]) {
      socksHash[currentColor] += 1;
    } else if (socksHash[currentColor] === undefined) {
      socksHash[currentColor] = 1;
    }
  }

  let socksCount = 0;
  for (let k in socksHash) {
    if (socksHash[k] % 2 === 1 && socksHash[k] != 1) {
      socksCount += Math.floor(socksHash[k] / 2);
    } else if (socksHash[k] % 2 === 0) {
      socksCount += Math.floor(socksHash[k] / 2);
    }
  }

  return socksCount;
}
