import os
from speech import speech

def main():
    s = speech(5)
    string = "python3 text.py " + s
    os.system(string)
 
main()