// console.log("hello world");

//     let x = 10;
//     let y = 5;


// {let z = x + y;
// console.log(z);}

// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log("first " + x);  // 2
//     }
//     console.log("second " + x);  // 2
//   }
  
//   {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log("third " + x);  // 2
//     }
//     console.log("fourth " + x);  // 1
//   }

//   let x = 10;

// {
// 	let y = 5;
// 	{
// 		let z = x + y;
// 		console.log(z);
// 	}
// }
// let x = 10;

// if (x == 10) {
//     console.log("it is"); // do this
//   } else {
//     console.log("it is not"); // do this
//   }


// let age = 17;

// if (age > 17) {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }
// below = come back to this
// let day = "Monday";

// if (day === "Monday"); {
//     console.log("It's the beginning of the week.");
// } else if (day === "Tuesday" || day === "Wednesday") {
//     console.log("It's the middle of the week.");
// } else if (day === "Thursday") {
//     console.log("It's almost the weekend.");
// } else if (day === "Friday") {
//     console.log("It's the end of the week. Time to relax!");
// } else {
//     if (day === "Saturday" || day === "Sunday") {
//         console.log("It's the weekend. Enjoy!");
//     } else {
//         console.log("Invalid day of the week.");
//     }
// }


// let temperature = 50;
// let time = "morning";

// if (temperature >= 80) {
//     console.log("It's hot outside!");
//     if (time === "morning") {
//         console.log("Remember to wear sunscreen.");
//     } else {
//         console.log("Stay hydrated!");
//     }
// } else if (temperature >= 65) {
//     console.log("It's a pleasant day.");
// } else {
//     console.log("It's a bit chilly.");
// }

// let grade = 54;

// if (grade >= 90) {
//     console.log("A - Great job!");
// } else if (grade >= 80) {
//     console.log("B - Nice!");
// } else if (grade >= 70) {
//     console.log("C - Cool!");
// }  else if (grade >= 55) {
//     console.log("D - Needs improvement");
// } else if (grade < 55) {
//     console.log("F - Try again");
// }



let x = 5;
let y = 4;
let operand = "*";
switch (operand) {
   case "+":
       console.log(x + y);
       break;
   case "-":
       console.log(x - y);
       break;
   case "*":
       console.log(x * y);
       break
   case "/":
       console.log(x / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}



