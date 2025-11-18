console.log("Hello, World!");

var helloSwitched = false;

const keyPressDiv = document.querySelector(".on-key-press-hello");
const keyPressShowKeyDiv = document.querySelector(".on-key-press-show-key");
const movingDiv = document.querySelector(".moving");

window.addEventListener("keydown", () => hello(keyPressDiv));
window.addEventListener("keydown", (event) =>
  showKey(keyPressShowKeyDiv, event)
);

function hello(el) {
  if (helloSwitched) {
    el.innerHTML = "Hello from Trigger";
    helloSwitched = false;
  } else {
    el.innerHTML = "";
    helloSwitched = true;
  }
}

function showKey(el, event) {
  el.innerHTML = `${event.key}`;
}

function initMovement() {
  const movingDiv = document.getElementById("moving");

  // Track keys
  let keys = {};
  window.addEventListener("keydown", (e) => (keys[e.key] = true));
  window.addEventListener("keyup", (e) => (keys[e.key] = false));

  // Position (in %)
  let pos = { x: 0, y: 0 };
  let vel = { x: 0, y: 0 };

  const acc = 1; // acceleration per frame
  const maxSpeed = 10; // max speed per frame
  const friction = 0.97; // slow down when keys released

  function moveDiv() {
    // Apply acceleration based on pressed keys
    if (keys["ArrowLeft"]) vel.x -= acc;
    if (keys["ArrowRight"]) vel.x += acc;
    if (keys["ArrowUp"]) vel.y -= acc;
    if (keys["ArrowDown"]) vel.y += acc;

    // Apply friction when no keys are pressed
    if (!keys["ArrowLeft"] && !keys["ArrowRight"]) vel.x *= friction;
    if (!keys["ArrowUp"] && !keys["ArrowDown"]) vel.y *= friction;

    // Clamp max speed
    vel.x = Math.max(Math.min(vel.x, maxSpeed), -maxSpeed);
    vel.y = Math.max(Math.min(vel.y, maxSpeed), -maxSpeed);

    // Update position
    pos.x += vel.x;
    pos.y += vel.y;

    movingDiv.style.transform = `translate(${pos.x}%, ${pos.y}%)`;
    requestAnimationFrame(moveDiv);
  }

  requestAnimationFrame(moveDiv);
}
initMovement();
