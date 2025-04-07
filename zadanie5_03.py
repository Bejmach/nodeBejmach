class Course:
    def __init__(self, id, name):
        self.name:str = name;
        self.id:int = id;
    def __init__(self, wholeStr):
        data = wholeStr.split(",");
        self.name:str = data[1];
        self.id:int = data[0];

class Student:
    def __init__(self, name, surname, age, id):
        self.name:str = name;
        self.surname:str = surname;
        self.age:int = age;
        self.id:int = id;
    def __init__(self, wholeStr):
        data = wholeStr.split(",");
        self.name:str = data[1];
        self.surname:str = data[2];
        self.age:int = int(data[3]);
        self.id:int = int(data[0]);

students = open("students.txt", "r", encoding="utf-8");
courses = open("courses.txt", "r", encoding="utf-8");

SLines = students.readlines();
CLines = courses.readlines();

SData = [];
CData = [];

for i in range(len(SLines)):
    SData.append(Student(SLines[i]));
for i in range(len(CLines)):
    CData.append(Course(CLines[i]));

studentsMap = [];

for i in range(len(SData)):
    studentsMap.append([]);
    studentsMap[i].append(SData[i]);
    studentsMap[i].append([]);
    for j in range(len(CData)):
        if int(CData[j].id) == int(SData[i].id):
            studentsMap[i][1].append(CData[j].name);

for i in range(len(studentsMap)):
    print(studentsMap[i][0].name+" "+ studentsMap[i][0].surname, ":");
    file = open(studentsMap[i][0].name+"_"+ studentsMap[i][0].surname+".txt", "w");
    file.write("Kursy:\n");
    for j in range(len(studentsMap[i][1])):
        print("    ", studentsMap[i][1][j].replace("\n", ""));
        file.write("-"+studentsMap[i][1][j].replace("\n", "")+",\n");
    file.close();
    print();

students.close();
courses.close();

