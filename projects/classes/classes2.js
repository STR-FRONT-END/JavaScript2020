class Person {
    constructor (props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
}

class Instructor extends Person {
    constructor(props) {
        super(props)
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    };
}

class Student extends Person {
    constructor(props) {
        super(props)
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.earnedGrade = Math.floor(Math.random() * 99) + 1  

    }
    listsSubjects(subjects) {
        return subjects.join(' ');
    };
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    };
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props)
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
        
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    };
}


//Objects
//Instructors
const shannon = new Instructor({
    name: 'Shannon',
    location: 'San Diego, Califorina',
    age: 62,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `The more you code, the more you know!`
  });

  const keith = new Instructor({
    name: 'Keith',
    location: 'Montgomery, Alabama',
    age: 33,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Repetition is  the key to learning any new skill`
  });

  const lisa = new Instructor({
    name: 'Lisa',
    location: 'New York, New York',
    age: 29,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Coding is life!`
  });

  //ProjectManagers
  const wilma = new ProjectManager({
    name: 'Wilma',
    location: 'Austin, Texas',
    age: 28,
    gender: 'female',
    favInstructor: 'JavaScript',
    gradClass: 'Web16',
    
  });

  const olivia = new ProjectManager({
    name: 'Olivia',
    location: 'Sacramento, California',
    age: 34,
    gender: 'female',
    favInstructor: 'JavaScript',
    gradClass: 'CS17',
    
  });

  const troy = new ProjectManager({
    name: 'Troy',
    location: 'Oakland, California',
    age: 22,
    gender: 'male',
    favInstructor: 'JavaScript',
    gradClass: 'Web16',
    
  });


//Students
  const jason = new Student({
    name: 'Jason',
    location: 'Memphis, Tennessee',
    age: 39,
    gender: 'male',
    previousBackground: 'Teacher',
    className: 'Web19',
    favSubject: 'Ruby'
    
  });

  const jennifer = new Student({
    name: 'Jennifer',
    location: 'Atlanta, Georgia',
    age: 26,
    gender: 'female',
    previousBackground: 'Retail',
    className: 'CS17',
    favSubject: 'C++'
    
  });

  const mike = new Student({
    name: 'Mike',
    location: 'Atlanta, Georgia',
    age: 24,
    gender: 'male',
    previousBackground: 'Student',
    className: 'Web17',
    favSubject: 'C++'
    
  });

  console.log(shannon.speak());
  console.log(shannon.demo("Perl"));
  console.log(shannon.grade(mike, 'Flex-Box'));
  console.log(keith.speak());
  console.log(keith.demo("Ruby"));
  console.log(keith.grade(jennifer, 'Constructor Functions'));
  console.log(lisa.speak());
  console.log(lisa.demo("JavaScript"));
  console.log(lisa.grade(mike, 'Flex-Box'));
  console.log(mike.speak());
  console.log(mike.listsSubjects(["Swift", "CSS", "Object C","Java"]));
  console.log(mike.prAssignment('CSS Selectors'));
  console.log(mike.sprintChallenge('Advance CSS'));
  console.log(jennifer.speak());
  console.log(jennifer.listsSubjects(["JavaScript", "CSS", "HTML","React"]));
  console.log(jennifer.prAssignment('preprocessing'));
  console.log(jennifer.sprintChallenge('Responsive Design'));
  console.log(jason.speak());
  console.log(jason.listsSubjects(["PHP", "Python", "CSS","React"]));
  console.log(jason.prAssignment('Constructor Functions'));
  console.log(jason.sprintChallenge('React'));
  console.log(olivia.speak());
  console.log(olivia.standUp("web19_livi"));
  console.log(olivia.debugsCode(jason, 'media queries'));
  console.log(wilma.speak());
  console.log(wilma.standUp("web18_wilma"));
  console.log(wilma.debugsCode(mike, 'JavaScript classes'));
  console.log(troy.speak());
  console.log(troy.standUp("web19_troy"));
  console.log(troy.debugsCode(lisa, 'JavaScript functions'));




  
