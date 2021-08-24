// node js-class.js \\
console.log('');

class Support 
{
    employeeName;
    duty;
    department = 'Web';
    designation = 'Support Web Dev';

    constructor(employeeName, duty)
    {
        this.employeeName = employeeName;
        this.duty = duty;
    }
    /* 
    startSession(employeeName)
    {
        this.employeeName = employeeName;
        console.log(employeeName, 'Start a support session');
    }
    */
    startSession()
    {
        console.log(this.employeeName, 'Start a support session');
    }


}

const sakib = new Support('Sakib','8hours');
const hridoy = new Support('Hridoy','Part-time');

/* 
sakib.startSession('Sakib');
hridoy.startSession('Hridoy'); 
*/

sakib.startSession();
hridoy.startSession(); 

console.log('');

console.log(sakib);
console.log('');
console.log(hridoy); 