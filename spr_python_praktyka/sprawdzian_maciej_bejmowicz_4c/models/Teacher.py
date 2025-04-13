__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Bejmowicz 4C"


class Teacher:
    def __init__(self, _id: int, name: str, surname: str):
        self._id = _id
        self.name = name
        self.surname = surname

    def to_str(self) -> str:
        return f"{self.name} {self.surname}"
