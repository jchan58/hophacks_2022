import os
import sys

from transformers import pipeline
from datetime import datetime

def main():
    new_string = ""
    for element in range(1,len(sys.argv)) :
        string = sys.argv[element]
        new_string = new_string + string
    #print("this is string" + string)
    emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa')
    emotion_labels = emotion(new_string)
   # print(emotion_labels)
   # print(emotion_labels[0]['label'] + " " + str(datetime.now()))
    f = open("output.txt", "a")
    f.write(str(emotion_labels[0]['label'] + " " + str(datetime.now()) + "\n"))
    f.close()
    
if __name__ == '__main__':
    main()
