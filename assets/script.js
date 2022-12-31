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

    const txt = document.getElementById("txt"); // TEXT INPUT
    let v = [...txt.value];
    console.log(v);

    // note, need to cleanup the filenames and take out the asl prefix below

    for (let i = 0; i < v.length; i++) setTimeout(() => { console.log(i,v[i]);  document.getElementById("pic").src = `./assets/images/asl${v[i]}.gif` }, i * 1000 * speed);

  });

  // SPEC
  document.getElementById("special_msg").addEventListener("click", function () {

    const txt = "inekeiloveyou"
    let v = [...txt];
    console.log(v);

    // note, need to cleanup the filenames and take out the asl prefix below

    for (let i = 0; i < v.length; i++) setTimeout(() => { console.log(i, v[i]); document.getElementById("pic").src = `./assets/images/asl${v[i]}.gif` }, i * 1000 * speed);

  });

})();