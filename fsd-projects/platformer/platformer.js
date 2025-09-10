$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 200, 20, 700, "white");
createPlatform(1300, 100, 50, 250, "red");
createPlatform(790, 500, 50, 700, "black");
createPlatform(400, 40, 10, 560,"blue");
createPlatform(560, 600, 160, 150, "yellow");
createPlatform(45, 700, 50, 70, "pink");
createPlatform(200, 200, 50, 10, "cyan");
createPlatform(390, 690, 100, 70, "green");
createPlatform(200, 300, 100, 5, "purple");
createPlatform(110, 590, 50, 5, "orange");
createPlatform(50, 500, 35, 5, "orange");
createPlatform(50, 500, 30, 5, "orange");
createPlatform(0, 0, 10, 700, "white");
createPlatform(100, 400, 25, 5, "orange");
createPlatform(150, 300, 20, 5, "orange");
createPlatform(300, 440, 100, 5, "purple");
createPlatform(200, 600, 100, 5, "purple");
createPlatform(900, 400, 150, 5, "black");
createPlatform(1000, 200, 150, 5, "black");
createPlatform(7000, 300, 150, 5, "black");


    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 2000);
createCannon("right", 340, 2000);
createCannon("right", 800, 0);
createCannon("top", 360, 1000);
createCannon("right", 640, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
