// Problem 1
function triangel(a, b, c) {
  p = a + b + c;
  return p;
}

// Problem 2
function sum(a, b) {
  return (c = a + b);
}

// Problem 3
function cube(a) {
  let b = a * a * a;
  let c = a * a * 6;
  return [b, c];
}

// Problem 4
function rectangel(a, b) {
  let p = (a + b) * 2;
  let s = a * b;
  return [p, s];
}

// Problem 5
function problem5(x) {
  y = 3 * x - 5;
  return [y];
}

// Problem 6
function problem6(x) {
  let l = x * x;
  y = 4 * l - 3 * x + 5;
  return y;
}

// Problem 7
function problem7(a, b) {
  let c = a % b;
  return c;
}

// Problem 8
function problem8(a) {
  let b = Math.floor(a % 100) / 10;
  return b;
}

// Problem 9
function problem9(a) {
  // let a = 27;
  let b = a % 10;
  let c = Math.floor(a / 10);
  let d = b * c;
  return [b, c, d];
}

// Problem 10
function problem10(a) {
  // let a = 123;
  let b = a % 10;
  let c = Math.floor(a / 100);
  let d = Math.floor((a % 100) / 10);
  return [b, c, d];
}

// Problem 11
function problem11(a, b) {
  // let a = 200;
  // let b = 60;
  let c = Math.floor(a / b);
  let d = a - b * c;
  return [c, d];
}

// Problem 12
function problem12(totalSeconds) {
  // let totalSeconds = 10000;
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return [hours, minutes, seconds];
}

// Problem 13
function problem13(hours, minutes, seconds) {
  // let hours = 1;
  // let minutes = 2;
  // let seconds = 3;
  let a = hours * 60 * 60;
  let b = minutes * 60;
  return [a, b];
}

// Problem 14
function problem14(hours) {
  // let hours = 44;
  let b = 44 % 24;
  let a = Math.floor(44 / 24);
  return a, b;
}

// Problem 15
function problem15(days, hours) {
  // let days = 2;
  // let hours = 5;
  let a = 2 * 24;
  return a;
}

// Problem 16
function problem16(totalMonths) {
  // let totalMonths = 27;
  let years = Math.floor(totalMonths / 12);
  let months = totalMonths % 12;
  return [years, months];
}

// Problem 17
function problem17(years, months) {
  //   let years = 2;
  // let months = 7;
  let totalMonths = 12 * years + months;
  return totalMonths;
}

// Problem 18
function problem18(numb1, numb2) {
  // let numb1 = 16;
  // let numb2 = 14;

  if (numb1 > numb2) {
    console.log(numb1, "Max");
  } else {
    console.log(numb2);
  }
}

// let age = 12;

// if (age >= 18) {
//   console.log("Та насанд хүрсэн байна.");
// } else {
//   console.log("Та насанд хүрээгүй байна");
// }

// Problem 19
function problem19(numb1, numb2) {
  // let numb1 = 9;
  // let numb2 = 6;

  if (numb1 > numb2) {
    console.log(numb2);
  } else {
    console.log(numb1);
  }
}

// Problem 20
function problem20(numb1, numb2, numb3) {
  // let numb1 = 9;
  // let numb2 = 18;
  // let numb3 = 6;

  if (numb1 > numb2) {
    if (numb1 > numb3) {
      console.log(numb1);
    } else {
      console.log(numb3);
    }
  } else {
    if (numb2 > numb3) {
      console.log(numb2);
    } else {
      console.log(numb3);
    }
  }
}

// Problem 21
function problem21(numb1, numb2, numb3, numb4) {
  // let numb1 = 3;
  // let numb2 = 10;
  // let numb3 = 1;
  // let numb4 = 19;

  if (numb1 < numb2) {
    if (numb1 < numb3) {
      if (numb1 < numb4) {
        console.log(numb1);
      } else {
        console.log(numb4);
      }
    } else {
      console.log(numb3);
    }
  } else {
    if (numb2 < numb3) {
      console.log(numb2);
    } else {
      console.log(numb3);
    }
  }
}

// Problem 22
function problem22(numb1, numb2, numb3, numb4) {
  // let numb1 = 85;
  // let numb2 = 75;
  // let numb3 = 96;
  // let numb4 = 69;

  let a = 0;

  if (numb1 > 80) {
    a = a + numb1;
  }
  if (numb2 > 80) {
    a = a + numb2;
  }
  if (numb3 > 80) {
    a = a + numb3;
  }
  if (numb4 > 80) {
    a = a + numb4;
  }
  console.log(a);
}

// Problem 23
function problem23(numb1, numb2, numb3, numb4) {
  // let numb1 = 3;
  // let numb2 = 6;
  // let numb3 = 2;
  // let numb4 = 4;

  let a = 1;

  if (numb1 < 5) {
    a = a * numb1;
  }
  if (numb2 < 5) {
    a = a * numb2;
  }
  if (numb3 < 5) {
    a = a * numb3;
  }
  if (numb4 < 5) {
    a = a * numb4;
  }
  console.log(a);
}

// Problem 24
function problem24(numb1, numb2, numb3) {
  // let numb1 = 10;
  // let numb2 = 5;
  // let numb3 = 3;

  let a = 0;

  if (numb1 % 2 == 0) {
    a = a + numb1;
  }
  if (numb2 % 2 == 0) {
    a = a + numb2;
  }
  if (numb3 % 2 == 0) {
    a = a + numb3;
  }

  console.log(a);
}

// Problem 25
function problem25(numb1, numb2, numb3) {
  // let numb1 = 5;
  // let numb2 = 2;
  // let numb3 = 3;

  let a = 1;

  if (numb1 % 2 == 1) {
    a = a * numb1;
  }
  if (numb2 % 2 == 1) {
    a = a * numb2;
  }
  if (numb3 % 2 == 1) {
    a = a * numb3;
  }
  return a;
}

// Problem 26
function problem26(numb1, numb2, numb3, numb4) {
  // let numb1 = 7;
  // let numb2 = 22;
  // let numb3 = 30;
  // let numb4 = 13;

  let a = 0;

  if (numb1 % 11 != 0) {
    a = a + numb1;
  }
  if (numb2 % 11 != 0) {
    a = a + numb2;
  }

  if (numb3 % 11 != 0) {
    a = a + numb3;
  }

  if (numb4 % 11 != 0) {
    a = a + numb4;
  }
  return a;
}

// Problem 27
function problem27(numb1, numb2, numb3, numb4) {
  // let numb1 = 3;
  // let numb2 = 12;
  // let numb3 = 8;
  // let numb4 = 9;

  let a = 0;

  if (numb1 % 3 == 0) {
    a++;
  }
  if (numb2 % 3 == 0) {
    a++;
  }
  if (numb3 % 3 == 0) {
    a++;
  }
  if (numb4 % 3 == 0) {
    a++;
  }
  return a;
}

// Problem 28
function problem28(numb1, numb2, numb3) {
  // let numb1 = 2;
  // let numb2 = 5;
  // let numb3 = 5;

  let a = 0;

  if (numb1 == 5) {
    a = a + 1;
  }
  if (numb2 == 5) {
    a = a + 1;
  }
  if (numb3 == 5) {
    a = a + 1;
  }
  return a;
}

// Problem 29
function problem29(a) {
  // let a = 9;

  if (a > 10) {
    console.log("yes");
  } else {
    console.log("No");
  }
  return a;
}

// Problem 30
function problem30(a) {
  // let a = 4;

  if (a < 5) {
    console.log("YES");
  } else {
    console.log("no");
  }
  return a;
}

// Problem 31
function problem31(numb1, numb2, numb3) {
  // let numb1 = 3;
  // let numb2 = 4;
  // let numb3 = 5;

  if (numb1 % 2 == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  if (numb2 % 2 == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  if (numb3 % 2 == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// Problem 32
// for(i=0; i<1; i++){
//     console.log("IOI")
// }

// Problem 33

// for (i=0; i<3; i++){
//     console.log("IOI")
// }

// Problem 34
function problem34(a) {
  // let a = 4
  for (i = 0; i < a; i++) {
    console.log("IOI");
  }
}

// Problem 35
function problem35(a) {
  // let a = 5;
  let s = 0;

  for (i = 1; i <= a; i++) {
    s = s + i;
  }
  return s;
}

// Problem 36
function problem36(a) {
  // let a = 5;
  let s = 1;

  for (i = 1; i <= a; i++) {
    s = s * i;
  }
  return s;
}

// Problem 37
function problem37(a) {
  // let a = 6;
  let s = 0;

  for (i = 1; i <= a; i++) {
    s = 100 * i;
  }
  return s;
}

// Problem 38
function problem38(a, b) {
  // let a = 50;
  // let b = 6;

  let s = 0;

  for (let i = 1; i <= b; i++) {
    s = s + a;
  }
  return s;
}

// Problem 39
function problem39(a) {
  // let a = 5;

  let s = 1;
  for (let i = 1; i <= a; i++) {
    s = s * 2;
  }
  return s;
}

// Problem 40
function problem40(a, b) {
  // let a = 3;
  // let b = 4;

  let s = 1;

  for (let i = 1; i <= b; i++) {
    s = s * a;
  }
  return s;
}

// Problem 41
function problem41(a) {
  // let a = 4;
  if (a > 5 || a < 2) {
    console.log("buruu dun");
  } else if (a <= 3) {
    console.log("Unasan");
  } else console.log("Tentsesen");
}

// Problem 42
function problem42(a) {
  // let a = 5;
  let Dun;

  if (a == 2) {
    Dun = "Muu";
  } else if (a == 3) {
    Dun = "Dund";
  } else if (a == 4) {
    Dun = "Sain";
  } else if (a == 5) {
    Dun = "Onts";
  } else {
    Dun = "wrong number";
  }
  return Dun;
}

// Problem 43
function problem43(a) {
  // let a = 0;
  let Dun;

  if (a > 100 || a < 0) {
    Dun = "Wrong number";
  } else if (a > 89) {
    Dun = "A";
  } else if (a > 79) {
    Dun = "B";
  } else if (a > 69) {
    Dun = "c";
  } else if (a > 59) {
    Dun = "D";
  } else if (a >= 0) {
    Dun = "F";
  }
  return Dun;
}

// Problem 44
function problem44(a) {
  // let a = 8;
  let weekdays;

  if (a > 7 || a < 1) {
    weekdays = "Wrong";
  } else if (a == 1) {
    weekdays = "Monday";
  } else if (a == 2) {
    weekdays = "Tuesday";
  } else if (a == 3) {
    weekdays = "Wednesday";
  } else if (a == 4) {
    weekdays = "Thursday";
  } else if (a == 5) {
    weekdays = "Friday";
  } else if (a == 6) {
    weekdays = "Saturday";
  } else if (a == 7) {
    weekdays = "Sunday";
  }
  return weekdays;
}

// Problem 45
function problem45(a) {
  // let a = 1;
  let season;
  if (a <= 0 || a >= 13) {
    season = "Wrong";
  } else if (a >= 3 && a <= 5) {
    season = "Spring";
  } else if (a >= 6 && a <= 8) {
    season = "Summer";
  } else if (a >= 9 && a <= 11) {
    season = "Autumn";
  } else if ((a <= 2 && a <= 1) || a <= 12) {
    season = "Winter";
  }
  return season;
}

// Problem 46
function problem46(a, b, c) {
  // let a = 1;
  // let b = 2;
  // let c = 3;

  if (a + b >= c || b + c >= a || c + a >= b) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

// Problem 47
function problem47(a) {
  // let a = 5;

  let s = 0;

  for (let i = 1; i <= 10; i++) {
    s = s + a;
    console.log(a + "*" + i + "=" + s);
  }
  return s;
}

// Problem 48
function problem48(a, b) {
  // let a = 3;
  // let b = 5;

  let s = 1;

  for (let i = 1; i <= b; i++) {
    s = a * s;
    console.log(a + "^" + i + "=" + s);
  }
  return s;
}

// Problem 49
function problem49(b, c, d) {
  // let b = 2;
  // let c = 5;
  // let d = 4;

  let a = 0;

  if ((a = b * c - d)) {
    return a;
  }
}

// //////////////////////////////////
// Additional Problem
// Problem 1
let b=[2, 3, 4, 5, 3,]
function guravtaitentsuu(a){
  let count=0;

  for(let i=0; i<b.length; i++){
    if(b[i]==a){
      count+=1
    }
  }
  return count
}





// Problem 2
function gcd(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

// let a = Number(prompt("ehnii toog oruul"));
// let b = Number(prompt("daraagiin toog oruul"));
// let rem;

// while(b!==0){
//   rem=a%b
//   a=b;
//   b=rem;
// }

// console.log(a);

// let min = a < b ? a : b;
// for (i = min; i >= 1; i--) {
//   if (a % i === 0 && b % i === 0) {
//     console.log(i);
//   }
// }

// let max;
// if (a > b) {
//   max = a;
// } else {
//   max = b;
// }

// let a=23453;
// let b=3;
// let count=0;
// let count1=0;
// let n=a;
// while(n!==0){
//   parseInt(n/10)
//   count ++
// }

// for(i=0 ; i< count; i++){
//     if(a%10==b){
//       count1++
//     }
//     parseInt(a/10);
// }
// console.log(count1);

let arr = [1,2,3,4]
function getEven(array){
  let even= array.map(n=>n%2==0)
  return even
}


