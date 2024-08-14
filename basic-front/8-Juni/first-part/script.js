let month = 5;
switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("its winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("its fruhling");
    break;
  case 6:
  case 7:
  case 8:
    console.log("its sommer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("its autumn");
    break;
  default:
    console.log("Incorrect month");
    break;
}
