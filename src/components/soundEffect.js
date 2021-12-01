const hitsound = [
  "sound1.ogg",
  "sound2.ogg",
  "sound3.ogg",
  "sound4.ogg",
  "sound5.ogg",
];
const missShot = new Audio("sound/sound6.ogg");

function randomHitSounds() {
  const rdm = Math.floor(Math.random() * 4);
  // const sound = new Audio(`sound/${hitsound[rdm]}`);
  return `./sound/${hitsound[rdm]}`;
}

module.exports = { missShot, randomHitSounds };
