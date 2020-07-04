const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");


const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const numClosedDoors = 3;
const openDoor1;
const openDoor2;
const openDoor3;

/*
const randomChoreDoorGenerator = () => {

  const choreDoor = Math.floor(Math.random()*numClosedDoors);


  if( choreDoor == 0 ) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  } else if (choreDoor == 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;

  } else {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;

  }



};


const onClickMethod = (doorImage,openDoor) => {
 doorImage.src = openDoor;
};

doorImage1.onclick = onClickMethod(doorImage1,openDoor1);
doorImage2.onclick = onClickMethod(doorImage2,openDoor2);
doorImage3.onclick = onClickMethod(doorImage3,openDoor3);




  randomChoreDoorGenerator ();
*/

doorImage1.onclick = () => {

  doorImage1.src = botDoorPath;
      
  } ;


doorImage2.onclick = () => {

  doorImage2.src = beachDoorPath;
        
  } ;


doorImage3.onclick = () => {

  doorImage3.src = spaceDoorPath;
        
  } ;