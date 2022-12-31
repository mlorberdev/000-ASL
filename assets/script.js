!(function () {

  // VARS (DOM)
  const tips = document.getElementById("tips");
  const imgs = document.getElementById("images");
  const back = document.getElementById("back");
  const play = document.getElementById("play");
  const next = document.getElementById("next");
  const close = document.getElementById("close");
  let speed = 1;
  // VARS
  const letters = [];

  // SPELL WORD
  document.getElementById("txt").addEventListener("change", function () {

    // const txt = document.getElementById("txt"); // TEXT INPUT
    let v = [...this.value.toLowerCase()];
    console.log(v);

    for (let i = 0; i < v.length; i++) setTimeout(() => { console.log(i,v[i]);  document.getElementById("pic").src = `./assets/images/asl${v[i]}.webp` }, i * 1000 * speed);
    txt.value = "";
  });

  // SPEC
  document.getElementById("special_msg").addEventListener("click", function () {

    const txt = "inekeiloveyou"
    let v = [...txt];
    console.log(v);

    for (let i = 0; i < v.length; i++) setTimeout(() => { console.log(i, v[i]); document.getElementById("pic").src = `./assets/images/asl${v[i]}.webp` }, i * 1000 * speed);

  });

})();