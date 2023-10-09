var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port = process.env.PORT || 2450


var customers = [
  {
    custId: 1,
    name: "ABC",
    password: "abc1234",
    role: "admin",
    email: "abc@gmail.com"
  },
  {
    custId: 2,
    name: "Willie",
    password: "willie1234",
    role: "student",
    email: "willie@gmail.com"
  },
  {
    custId: 3,
    name: "Jack",
    password: "jack1234",
    role: "faculty",
    email: "jack@gmail.com"
  },
  {
    custId: 4,
    name: "James",
    password: "james1234",
    role: "student",
    email: "james@gmail.com"
  },
  {
    custId: 5,
    name: "Harry",
    password: "harry1234",
    role: "faculty",
    email: "harry@gmail.com"
  },
  {
    custId: 6,
    name: "Tia",
    password: "tia1234",
    role: "student",
    email: "tia@gmail.com"
  },
  {
    custId: 7,
    name: "Aditya",
    password: "aditya123",
    role: "faculty",
    email: "aditya@gmail.com"
  },
  {
    custId: 8,
    name: "Sonu",
    password: "sonu1234",
    role: "student",
    email: "sonu@gmail.com"
  },
  {
    custId: 9,
    name: "Ellie",
    password: "ellie1234",
    role: "student",
    email: "ellie@gmail.com"
  },
  {
    custId: 10,
    name: "Gia",
    password: "gia1234",
    role: "faculty",
    email: "gia@gmail.com"
  }
];
var courses = [
  {
    courseId: 1,
    name: "ANGULAR",
    code: "ANG97",
    description: "All fundamentals of Angular 7",
    faculty: ["Daniel", "Jack"],
    students: ["Sam"]
  },
  {
    courseId: 2,
    name: "JAVASCRIPT",
    code: "JS124",
    description: "Intoduction to javascript",
    faculty: ["Aditya"],
    students: ["James", "Joy", "Monu", "Rita"]
  },
  {
    courseId: 3,
    name: "REACT",
    code: "RCT56",
    description: "React Javascript library",
    faculty: ["Jack", "Gia"],
    students: ["Raima", "Rita", "Sonu", "James"]
  },
  {
    courseId: 4,
    name: "BOOTSTRAP",
    code: "BS297",
    description: "Bootstrap Designing Framework",
    faculty: [],
    students: ["James", "Tia", "Ellie"]
  },
  {
    courseId: 5,
    name: "CSS",
    code: "CS365",
    description: "Basic stylesheet language",
    faculty: [],
    students: ["James", "Rita", "Monica"]
  },
  {
    courseId: 6,
    name: "REST AND MICROSERVICES",
    code: "RM392",
    description: "Introduction to Microservices",
    faculty: [],
    students: ["Sam"]
  },
  {
    courseId: 7,
    name: "NODE",
    code: "ND725",
    description: "Introduction to Node",
    faculty: ["Sonia"],
    students: ["Saransh", "Shrey", "Monica"]
  }
];

var faculties = [
  { id: 5, name: "Daniel", courses: ["ANGULAR"] },
  { id: 4, name: "Sonia", courses: ["NODE"] },
  { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
  { id: 2, name: "Gia", courses: ["REACT"] },
  { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];


var classes = [
  {
    classId: 1,
    course: "REACT",
    time: "07:45",
    endTime: "08:45",
    topic: "Redux",
    facultyName: "Jack"
  },
  {
    classId: 2,
    course: "ANGULAR",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Jack"
  },
  {
    classId: 3,
    course: "JAVASCRIPT",
    time: "15:45",
    endTime: "17:40",
    topic: "Component",
    facultyName: "Aditya"
  }
];


var students = [
  {
    id: 16,
    name: "Willie",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "NODE"]
  },
  {
    id: 15,
    name: "Tia",
    dob: "30-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["BOOTSTRAP"]
  },
  {
    id: 14,
    name: "Apoorv",
    dob: "31-August-1998",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 13,
    name: "Joy",
    dob: "31-July-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 12,
    name: "Rachel",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: []
  },
  {
    id: 11,
    name: "Monica",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["CSS", "NODE"]
  },
  {
    id: 10,
    name: "Monu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT"]
  },
  {
    id: 9,
    name: "Sonu",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["REACT"]
  },
  {
    id: 8,
    name: "Raima",
    dob: "30-July-1997",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["REACT"]
  },
  {
    id: 7,
    name: "Rita",
    dob: "31-August-1998",
    gender: "female",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "REACT", "CSS"]
  },
  {
    id: 6,
    name: "Shrey",
    dob: "12-May-1997",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["NODE"]
  },
  {
    id: 5,
    name: "Saransh",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: ["NODE"]
  },
  {
    id: 4,
    name: "Sanya",
    dob: "31-July-1997",
    gender: "male",
    about: "Want to learn new technologies",
    courses: []
  },
  {
    id: 3,
    name: "James",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
  },
  {
    id: 2,
    name: "Sam",
    dob: "12-July-1994",
    gender: "male",
    about: "Pursuing Graduation",
    courses: ["ANGULAR", "REST AND MICROSERVICES"]
  },
  {
    id: 1,
    name: "Ellie",
    dob: "12-June-1992",
    gender: "female",
    about: "Want to learn new technologies",
    courses: ["BOOTSTRAP"]
  }
];


// login
app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const cust = customers.find((c) => c.email === email && c.password === password);
  console.log(cust);
  if (cust === undefined) {
    res.status(500).send("Login failed! Check email and Password!")
  }
  else {
    const custRec = {
      name: cust.name,
      email: cust.email,
      role: cust.role
    }
    res.send(custRec)
  }
})


// register

app.post("/register", function (req, res) {
  const cust = {
    custId: customers.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  }
  if (req.body.role === "student") {
    const studentData = {
      id: students.length + 1,
      name: req.body.name,
      dob: "",
      gender: "",
      about: "",
      courses: []
    }

    students.unshift(studentData)
  }
  if (req.body.role === "faculty") {
    const facultyData = {
      id: faculties.length+1, name: req.body.name, courses: [],
    }

    faculties.unshift(facultyData)
  }



  customers.unshift(cust);
  const customerRes = {
    name: req.body.name,
    role: req.body.role,
    email: req.body.email
  }

  res.send(customerRes)
})


// For getting all student names

app.get("/getStudentNames", function (req, res) {
  const studentName = students.map((n) => n.name)

  res.send(studentName)
})


// For getting all faculty names

app.get("/getFacultyNames", function (req, res) {
  const facultyName = faculties.map((n) => n.name)
  res.send(facultyName)
})

// get customers
app.get("/getCustomers", function (req, res) {
  res.send(customers);
})

// for get all Courses

app.get("/getCourses", function (req, res) {
  res.send(courses);
})


//get a course by id

app.get("/getCourse/:courseId", function (req, res) {
  const courseId = +req.params.courseId;
  const findDetails = courses.find((s) => s.courseId === courseId)
 
  if (findDetails) {
    
    res.send(findDetails)

  }
  else {
    res.status(500).send("Course is not find")
  }
})


// put Assign student/faculty to course

// app.put("/putCourse", function (req, res) {
//   let course = req.body;
//   let index = courses.findIndex((c) => c.courseId === course.courseId);
 
//   if (index >= 0) {
//     // Update the course in the 'courses' array
//     courses[index] = { ...course };
    
//     console.log(course)
//     if (course.students && Array.isArray(course.students)) {
//       let foundStudents = course.students.map((stu) => {
//         let findStudent = students.find((s) => s.name === stu);
//         return findStudent ? findStudent : null;
//       });
    
      
//       // Update the student's courses
//       foundStudents.forEach((s) => {
//         let find = s.courses.find((c) => c === course.name);
//         if (!find) {
//           s.courses.push(course.name);
//         }
        
//       });
      
//       res.status(200).send("Course updated in Students successfully");
//     } 
//     else if(course.faculty && Array.isArray(course.faculty)){
//       let foundFaculty = course.faculty.map((fac) => {
//         let findFaculty = faculties.find((f) => f.name === fac);
//         return findFaculty ? findFaculty : null
//       });
//       // console.log(foundFaculty);

//       foundFaculty.forEach((f) => {
//         let find = f.courses.find((c) => c === course.name);
//         if(!find)
//         {
//           f.courses.push(course.name)
//         }
//       })

//       res.status(200).send("Course updated in Faculty successfully");

      
//     }



//   } else {
//     res.status(401).send("Course is not found");
//   }
// });


app.put("/putCourse", function (req, res) {
  let course = req.body;
  let index = courses.findIndex((c) => c.courseId === course.courseId);

  if (index >= 0) {
    // Update the course in the 'courses' array
    courses[index] = { ...course };

    console.log(course);

    if (course.students && Array.isArray(course.students)) {
      let foundStudents = course.students.map((stu) => {
        let findStudent = students.find((s) => s.name === stu);
        return findStudent ? findStudent : null;
      });

      // Update the student's courses
      foundStudents.forEach((s) => {
        let find = s.courses.find((c) => c === course.name);
        if (!find) {
          s.courses.push(course.name);
        }
      });

      res.status(200).send("Course updated in Students successfully");
    }

    if (course.faculty && Array.isArray(course.faculty)) {
      let foundFaculty = course.faculty.map((fac) => {
        let findFaculty = faculties.find((f) => f.name === fac);
        return findFaculty ? findFaculty : null;
      });

      foundFaculty.forEach((f) => {
        let find = f.courses.find((c) => c === course.name);
        if (!find) {
          f.courses.push(course.name);
        }
      });

      res.status(200).send("Course updated in Faculty successfully");
    } else {
      res.status(400).send("Invalid request data");
    }
  } else {
    res.status(401).send("Course is not found");
  }
});













// View Students 


app.get("/getStudents", function (req, res) {
  const courses = req.query.course;
  const page = parseInt(req.query.page);

  const courseArray = courses ? courses.split(",") : [];

  const filteredStudents = filterParam(students, "courses", courseArray);

  const paginatedStudents = paginate(filteredStudents, page);

  res.json({
    page: page,
    items: paginatedStudents,
    totalItems: paginatedStudents.length,
    totalNum: filteredStudents.length,
  });
});


// view faculties
app.get("/getFaculties", function (req, res) {
  const courses = req.query.course;
  const page = parseInt(req.query.page);

  const courseArray = courses ? courses.split(",") : [];

  const filteredStudents = filterParam(faculties, "courses", courseArray);

  const paginatedStudents = paginate(filteredStudents, page);

  res.json({
    page: page,
    items: paginatedStudents,
    totalItems: paginatedStudents.length,
    totalNum: filteredStudents.length,
  });
});


// post details of students

app.post("/postStudentDetails", function (req, res) {

  const index = students.findIndex((stu) => stu.name === req.body.name)
  console.log(index);
  if(index >= 0)
  {
    const stu = students[index];
    console.log(stu)
    const student = {
      name : req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      about: req.body.about,
      courses : stu.courses
    }
    students[index] ={id : stu.id , ...student}
    res.send(student)
  }
})


// get details of student 

app.get("/getStudentDetails/:student", function (req, res) {
  const student = req.params.student;
  const findDetails = students.find((s) => s.name === student)
  console.log(findDetails)
  if (findDetails) {
    const senData = {
      id: findDetails.id,
      name: findDetails.name,
      dob: findDetails.dob,
      gender: findDetails.gender,
      about: findDetails.about,
    }
    res.send(senData)

  }
 
})

// get courses of student
app.get("/getStudentCourse/:student", function (req, res) {
  const student = req.params.student;
  const findCourse = courses.filter((s) => s.students.find((name) => name === student)).map((course) => {
    return {
      courseId: course.courseId,
      name: course.name,
      code: course.code,
      description: course.description
    }
  })
  console.log(findCourse)
  if (findCourse) {

    res.send(findCourse)

  }
 
})



// get classs of student

app.get("/getStudentClass/:student", function (req, res) {
  const student = req.params.student;

  const findStudent = students.find((st) => st.name === student);
  console.log(findStudent)
  if (!findStudent) {
    return res.status(500).send("Student is not found");
  }
 

  const courseArr = findStudent.courses

  const findClass = classes.filter((c) => {
    return courseArr.indexOf(c.course) !== -1;
  });

  if (findClass) {
    res.send(findClass)
  }
 
})




















// get faculty course 

app.get("/getFacultyCourse/:faculty", function (req, res) {
  const faculty = req.params.faculty;
  const findCourse = courses.filter((s) => s.faculty.find((name) => name === faculty)).map((course) => {
    return {
      courseId: course.courseId,
      name: course.name,
      code: course.code,
      description: course.description
    }
  })
  console.log(findCourse)
  if (findCourse) {

    res.send(findCourse)

  }
  else {
    res.status(500).send("Couses are not find")
  }
})


// get facultyclass


app.get("/getFacultyClass/:faculty", function (req, res) {
  const faculty = req.params.faculty;
  const findClass = classes.filter((s) => s.facultyName === faculty)
  console.log(findClass)
  if (findClass) {

    res.send(findClass)

  }
  else {
    res.status(500).send("Classes are not find")
  }
})


// getClass by id

app.get("/getclass/:classId", function (req, res) {
  const classId = +req.params.classId;
  const findClass = classes.find((c) => c.classId === classId)
   
  console.log(findClass)
  if (findClass) {

    res.send(findClass)

  }
  else {
    res.status(500).send("classes are not find")
  }
})


// post a class

app.post("/postClass", function (req, res) {
  const classJson = {
    classId: classes.length + 1,
    course: req.body.course,
    time: req.body.time,
    endTime: req.body.endTime,
    topic: req.body.topic,
    facultyName: req.body.facultyName,
  }
  console.log(classJson);
  classes.unshift(classJson);

  res.send(classJson)
})

// edit a class


app.put("/postClass/:classId", function (req, res) {
  let classId = +req.params.classId;
  let classJson = req.body
  let index = classes.findIndex((c) => c.classId === classId)
  console.log(index);
  if (index >= 0) {
    classes[index] = { classId: classId, ...classJson };
    res.send(classJson);
  }
  else {
    res.status(401).send("Class is not found")
  }

});











function filterParam(arr, name, values) {
  if (!values || values.length === 0) return arr;

  return arr.filter((item) => {
    if (item[name].length === 0) return false;

    for (let i = 0; i < values.length; i++) {
      if (item[name].indexOf(values[i]) !== -1) {
        return true;
      }
    }

    return false;
  });
}


function paginate(arr, page) {
  const perPage = 3;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return arr.slice(startIndex, endIndex);
}








app.listen(port, () => console.log(`Node app listening on port ${port}!`));