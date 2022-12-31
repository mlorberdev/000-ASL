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

    let v = [...this.value.toLowerCase()]; // spread to array; lowercase to match the filenames

    // for the length of the user input, use speed setting to advance through v
    for (let i = 0; i < v.length; i++) setTimeout(() => {
      document.getElementById("pic").src = `./assets/images/asl${v[i]}.webp`
    }, i * 1000 * speed);
    txt.value = ""; // clear input
  });

  // SPEC
  document.getElementById("special_msg").addEventListener("click", function () {

    const txt = "inekeiloveyou"
    let v = [...txt];

    for (let i = 0; i < v.length; i++) setTimeout(() => { document.getElementById("pic").src = `./assets/images/asl${v[i]}.webp` }, i * 1000 * speed);

  });

})();