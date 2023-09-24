const generetaeRefOnekey = async () => {
  let i = 0;
  while (i < 2) {
    let r =
      Math.random().toString(36).substr(2, 4) +
      "-" +
      Math.random().toString(36).substr(2, 4) +
      "-" +
      Math.random().toString(36).substr(2, 4) +
      "-" +
      Math.random().toString(36).substr(2, 4);
    console.log(r.toUpperCase());
    try {
      return r.toUpperCase();
    } catch (error) {
      console.log(error);
    }
    i++;
  }
};

export { generetaeRefOnekey };
