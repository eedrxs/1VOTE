function stringifyHex(hex) {
  let str = "";

  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex[i] + hex[i + 1], 16));
  }

  return str;
}

export default stringifyHex;
