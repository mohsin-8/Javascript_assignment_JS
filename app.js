// Alert
// alert("Hello World");

// Variables

// var firstName = "Mohsin Ali";
// var lastName = "Khan";

// alert(firstName + ' ' + lastName);

// Variables for Numbers


// var a = "<b>My age is</b>";
// var age = 20;

// document.write(a + " " + age + "<br>");

// var addYourAge = age + 20;

// document.write("Next task is Add your Age + 20 : ");
// document.write(addYourAge);



/* Familiar operators */

// var numberSum = 2 + 2;
// console.log(numberSum);

// var popularNumber = 2 - 4;
// console.log(popularNumber);

// var multiplyNumber = 2 * 5;
// console.log(multiplyNumber);

// var divisionNumbers = 10 / 5;
// console.log(divisionNumbers);

// var whatLeftOvers = 10 % 6;
// console.log(whatLeftOvers);



/* Unfamiliar Operators */

// var num = 1;
// console.log(num);

// var newIncrement = ++num;
// console.log(newIncrement);


// var complexQuestion = 5;
// var sum = ++complexQuestion + --complexQuestion - ++complexQuestion + complexQuestion++;
// console.log(sum);


// var practiceSum = 2;

// var newSum = practiceSum++ - --practiceSum + ++practiceSum + ++practiceSum;
// console.log(newSum);



/* Eliminating ambiguity */

// var totalCost = 1 + 2 * 4;
// console.log(totalCost);


// var totalCost = 2 + (3 * 2);
// console.log(totalCost);


// var resultOfComputation = ((2 * 4) * 2) + 4;
// console.log(resultOfComputation);

// var userName = "Mohsin";

// console.log("Thanks, " + userName + "!");


/* Prompt */

alert('Check your Marksheet Result');

var s1, s2, s3, s4, s5, s6, s7, total, per, name, roll;
roll = prompt("enter the student roll no");
name = prompt("Enter the student name");
s1 = parseInt(prompt("enter subject1 mark    : "));
s2 = parseInt(prompt("enter subject2 mark    : "));
s3 = parseInt(prompt("enter subject3 mark    : "));
s4 = parseInt(prompt("enter subject4 mark    : "));
s5 = parseInt(prompt("enter subject5 mark    : "));
s6 = parseInt(prompt("enter subject6 mark    : "));
s7 = parseInt(prompt("enter subject7 mark    : "));

total = s1 + s2 + s3 + s4 + s5 + s6 + s7;
per = total / 7;

document.write(" <h1>    <center>   MARKSHEET    </h1> </center>");
document.write(" <hr color=red>   <hr color=red>  ");
document.write("  <h3>Roll no          :  " + roll);
document.write(" <br> Name          :  " + name + "</h3>");
document.write(" <hr color=black>");
document.write(" <b> <br> &nbsp &nbsp &nbsp     Subject           &nbsp &nbsp&nbsp &nbsp Mark  </b>");

document.write(" <br> &nbsp &nbsp &nbsp     Subject 1      &nbsp &nbsp&nbsp &nbsp     &nbsp &nbsp   " + s1);
document.write(" <br> &nbsp &nbsp &nbsp     Subject 2        &nbsp &nbsp&nbsp &nbsp   &nbsp &nbsp   " + s2);
document.write(" <br> &nbsp &nbsp &nbsp     Subject 3      &nbsp &nbsp&nbsp &nbsp    &nbsp &nbsp   " + s3);
document.write(" <br> &nbsp &nbsp &nbsp     Subject 4       &nbsp &nbsp&nbsp &nbsp   &nbsp &nbsp    " + s4);
document.write(" <br> &nbsp &nbsp &nbsp     Subject 5       &nbsp &nbsp&nbsp &nbsp   &nbsp &nbsp   " + s5);
document.write(" <br> &nbsp &nbsp &nbsp     Subject 6        &nbsp &nbsp&nbsp &nbsp   &nbsp &nbsp   " + s6);
document.write(" <br> &nbsp &nbsp &nbsp     Subject 7        &nbsp &nbsp&nbsp &nbsp  &nbsp &nbsp    " + s7);
if (s1 < 40 || s2 < 40 || s3 < 40 || s4 < 40 || s5 < 40 || s6 < 40 || s7 < 40) {
    document.write(" <hr color=black>");
    document.write("  Total               <b>:  " + total + "<br>");
    document.write(" &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <font color=red  > <h3>Fail  </h3></font>");
}
else {
    document.write(" <hr color=black>");
    document.write("    Total               :  " + total);
    document.write("   <br>  Percentage   :  " + per);
    document.write("   <br> grade                      :");

    if (per >= 70) {
        document.write("      <b>Districation");
    }
    else if (per >= 60) {
        document.write("       <b>First class");
    }
    else if (per >= 48) {
        document.write("       <b>Second class");
    }
    else {
        document.write("        <b>pass class");
    }
}
document.write(" <hr color=red>   <hr color=red>  ");