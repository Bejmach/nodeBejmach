def Line40(f):
    output = "";
    lineCounter = 1;
    lines = f.readlines()
    for line in lines:
        if(lineCounter%40 == 0):
            output+=line[9];
        lineCounter+=1;

    print(output);

def MultipleChars(string):
    charTable = []
    count = 0
    for i in range(len(string)):
        if string[i] not in charTable: 
            charTable.append(string[i]);
            count += 1;

    return (string, count)
    
def task2(f):
    highest = 0;
    word = "";
    lines = f.readlines()
    for line in lines:
        mLines = MultipleChars(line)
        if mLines[1]>highest:
            highest = mLines[1];
            word = mLines[0];
    print(word, " ", highest);

def lenLessThan10(string):
    for i in range(1, len(string)-1):
        if abs(ord(string[i]) - ord(string[i-1])) > 10:
            return False;
    return True;

def task3(f):
    lines = f.readlines()
    for line in lines:
        if(lenLessThan10(line)):
            print(line);

f = open("sygnaly.txt", "r");

task3(f);

f.close();
