import stringifyHex from "./stringifyHex";

function handleError(error) {
  let message = error.message.match(/\b0x\p{Hex_Digit}*\b/u);
  if (message) {
    message = stringifyHex(message[0].slice(138));
  } else {
    message = error.message.match(/[\S\s]*?{/)[0].slice(0, -1);
  }
  alert(message);
}

export default handleError;
