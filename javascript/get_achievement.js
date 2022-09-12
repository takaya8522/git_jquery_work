function get_achievement(japanese, math, science) {
  let sum = japanese + math + science;
  if(sum >= 250){
    return 'A';
  } else if(sum >= 200 && sum <= 250){
    return 'B';
  } else if(sum >=100 && sum <= 200){
    return 'C';
  } else {
    return 'D';
  }
}

console.log(get_achievement(80, 80, 80));
