__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Maciej Bejmowicz 4C"


def year_grade(average: float) -> int:
    if average >= 5.5:
        return 6
    elif average >= 4.7:
        return 5
    elif average >= 3.7:
        return 4
    elif average >= 2.7:
        return 3
    elif average >= 1.85:
        return 2
    else:
        return 1
