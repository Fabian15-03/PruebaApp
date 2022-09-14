/* eslint-disable no-useless-escape */

export const validaremail = text => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const validarpassword = text => {
  let reg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
