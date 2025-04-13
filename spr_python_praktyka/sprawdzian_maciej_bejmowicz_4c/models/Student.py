__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Bejmowicz 4C"

from datetime import date


class Student:
    def __init__(self, _id: int, first_name: str, last_name: str, birth_date: date):
        self._id = _id
        self.first_name = first_name
        self.last_name = last_name
        self.birth_date = birth_date

    @property
    def age(self) -> int:
        now = date.today()
        return now.year - self.birth_date.year

    def to_str(self) -> str:
        return f"{self.first_name} {self.last_name} ({self.age})"
