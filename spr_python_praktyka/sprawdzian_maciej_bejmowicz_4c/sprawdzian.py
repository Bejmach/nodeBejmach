__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Bejmowicz 4C"

import datetime
import json
from typing import List, Dict, Any
from models.Student import Student
from models.Teacher import Teacher
from models.Subject import Subject
from models.Grades import Grades
from year_grade import year_grade

teachers: List[Teacher] = []
with open("teachers.txt", "r", encoding="utf-8") as file:
    for line in file:
        parts = line.split()
        if len(parts) == 3:
            _id = parts[0]
            name = parts[1]
            surname = parts[2]
            teachers.append(Teacher(int(_id), name, surname))

subjects: List[Subject] = []
with open("subjects.txt", "r", encoding="utf-8") as file:
    for line in file:
        parts = line.split()
        if len(parts) >= 3:
            _id = parts[0]
            name = ' '.join(parts[1:-1])
            teacher_id = parts[-1]
            teacher = next((t for t in teachers if t._id == int(teacher_id)), None)
            if teacher:
                subjects.append(Subject(int(_id), name, teacher))

students: List[Student] = []
with open("students.txt", "r", encoding="utf-8") as file:
    for line in file:
        parts = line.split()
        if len(parts) == 4:
            _id = parts[0]
            first_name = parts[1]
            last_name = parts[2]
            birth_str = parts[3]
            birth_date = datetime.datetime.strptime(birth_str, '%Y-%m-%d').date()
            students.append(Student(int(_id), first_name, last_name, birth_date))

grades: List[Grades] = []
with open("grades.txt", "r", encoding="utf-8") as file:
    for line in file:
        parts = line.split()
        if len(parts) >= 3:
            student_id = parts[0]
            subject_id = parts[1]
            grades_str = parts[2]
            grade_list = ' '.join(grades_str).split(',')
            student = next((s for s in students if s._id == int(student_id)), None)
            subject = next((sub for sub in subjects if sub._id == int(subject_id)), None)
            if student and subject:
                g = Grades(student, subject)
                for grade in grade_list:
                    try:
                        g.add_grade(int(grade.strip()))
                    except ValueError:
                        pass
                grades.append(g)

student_data: Dict[str, Dict[str, Any]] = {}
print("Oceny i średnie poszczególnych uczniów:\n")

for student in students:
    student_key = student.to_str()
    student_data[student_key] = {}

    print(f"{student_key}:")
    student_grades = [g for g in grades if g.student._id == student._id]

    for g in student_grades:
        subject_name = g.subject.name
        oceny = g.get_grades()
        srednia = g.get_average()
        ocena_roczna = year_grade(srednia)

        print(f"{subject_name}:")
        print(f"Oceny: {', '.join(map(str, oceny))}")
        print(f"Średnia: {round(srednia, 2)}")
        print(f"Ocena końcowa: {ocena_roczna}\n")

        student_data[student_key][subject_name] = {
            "Oceny": ', '.join(map(str, oceny)),
            "Srednia": round(srednia, 2),
            "Ocena roczna": ocena_roczna
        }

# Zapis do pliku students.json
with open("students.json", "w", encoding="utf-8") as f:
    json.dump([student_data], f, indent=4, ensure_ascii=False)

# Wyświetlenie separatora
print("=" * 50)
print()

# Grupowanie ocen wg przedmiotu
subject_data: Dict[str, Dict[str, Any]] = {}

for subject in subjects:
    subject_grades = [g for g in grades if g.subject._id == subject._id]
    all_grades = [grade for g in subject_grades for grade in g.get_grades()]
    if all_grades:
        avg = round(sum(all_grades) / len(all_grades), 2)
    else:
        avg = 0.0

    print(f"{subject.name}:")
    print(f"Nauczyciel: {subject.teacher.to_str()}")
    print(f"Oceny: {', '.join(map(str, all_grades))}")
    print(f"Średnia: {avg}\n")

    subject_data[subject.name] = {
        "Nauczyciel": subject.teacher.to_str(),
        "Oceny": all_grades,
        "Srednia": avg
    }

# Zapis do pliku subjects.json
with open("subjects.json", "w", encoding="utf-8") as f:
    json.dump([subject_data], f, indent=4, ensure_ascii=False)
