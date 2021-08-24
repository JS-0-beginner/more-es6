// node inheritance.js \\
console.log('');

//Common Class
class TeamMembers 
{
    employeeName;
    duty;
    
    constructor(employeeName, duty)
    {
        this.employeeName = employeeName;
        this.duty = duty;
    }
}

//Extending Common Class
class Support extends TeamMembers
{
    department = 'Web';
    designation = 'Support Web Dev';
    routine;
    constructor(employeeName, duty, routine)
    {
        //calling super function
        super(employeeName, duty);
        this.routine = routine;
    }
    startSession()
    {
        console.log(this.employeeName, 'Start a support session');
    }


}

class StudentCare extends TeamMembers
{
    department = 'Care';
    designation = 'Junior Web Dev';
    refund;
    constructor(employeeName, duty, refund)
    {
        //calling super function
        super(employeeName, duty);
        this.refund = refund;
    }
    
    manageStudents(students)
    {
        console.log(this.employeeName, 'Manage those weak',students);
    }


}

class CyberSecurity extends TeamMembers
{
    department = 'Security';
    designation = 'Cyber Dev';    
    ensureSecurity(hackers)
    {
        console.log(this.employeeName, 'Make sure our site is safe from',hackers);
    }


}

const sakib = new Support('Sakib','8hours','Weekly');
const hridoy = new Support('Hridoy','Part-time','Monthly');

const rakib = new StudentCare('Rakib','3hours','Student Issue Solved');
const nayeem = new StudentCare('Nayeem','Full-time','Student Issue Pending');

const rafi = new CyberSecurity('Rafi','Half-Shift');
const sadia = new CyberSecurity('Sadia','Half-Shift');


console.log(sakib);
console.log('');
console.log(hridoy);
console.log('');
console.log(rakib);
console.log('');
console.log(nayeem);
console.log('');
console.log(rafi);
console.log('');
console.log(sadia);
console.log('');

