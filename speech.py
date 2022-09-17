from email.mime import audio
import sounddevice as sd
import soundfile as sf
from scipy.io.wavfile import write
import wavio as wv
import speech_recognition as sr
from scipy.io import wavfile
#from flair.models import TextClassifier
#from flair.data import Sentence



freq = 44100

duration = 5

recording = sd.rec(int(duration * freq), samplerate=freq, channels=2)

sd.wait()

write("recording0.wav", freq, recording)

wv.write("ac.wav", recording, freq, sampwidth=2)


#speech to text

r = sr.Recognizer()

hellow=sr.AudioFile('ac.wav')
with hellow as source:
    audio = r.record(source)
try:
    s = r.recognize_google(audio)
    print("Text: "+s)
except Exception as e:
    print("Exception: "+str(e))




