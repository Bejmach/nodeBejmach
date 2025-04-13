__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Bejmowicz 4C"

from .Student import Student
from .Subject import Subject


class Grades:
    def __init__(self, student: Student, subject: Subject):
        self.grades = []
        self.student = student
        self.subject = subject

    def add_grade(self, grade: int):
        if grade < 1 or grade > 6:
            raise ValueError("Grade must be between 1 and 6.")
        self.grades.append(grade)

    def get_grades(self) -> list[int]:
        return self.grades

    def get_average(self) -> float:
        if not self.grades:
            return 0.0
        return sum(self.grades) / len(self.grades)
