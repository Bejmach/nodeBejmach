__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Bejmowicz 4C"

from .Teacher import Teacher


class Subject:
    def __init__(self, _id: int, name: str, teacher: Teacher):
        self._id = _id
        self.name = name
        self.teacher = teacher

    def to_str(self) -> str:
        return f"{self.name} {self.teacher}"
