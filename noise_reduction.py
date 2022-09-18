import IPython
from scipy.io import wavfile
import scipy.signal
import io
import numpy as np
import matplotlib.pyplot as plt
import librosa
import contextlib
from os.path import dirname, join as pjoin
from scipy.io import wavfile
import wave
import scipy.io
from email.mime import audio
import sounddevice as sd
import soundfile as sf
from scipy.io.wavfile import write
import wavio as wv
import speech_recognition as sr
from scipy.io import wavfile
from transformers import pipeline
import wavio


def reduced_noise(sound) :

    wav_loc = sound
    dat = wavfile.read(wav_loc)
    data = dat[1]

    with contextlib.closing(wave.open(wav_loc,'r')) as f:
        frames = f.getnframes()
        rate = f.getframerate()
        duration = frames / float(rate)
        
    def plotListBetter(lst, name, num, duration):
        xlist = []
        ylist = []
        totalT = num
        tList = np.arange(num)
        
        
        for i in range(len(lst)):   
            xlist.append(i)
            ylist.append(lst[i])
        plt.plot(((tList/totalT)*(duration)),ylist)
        #formatting
        plt.xlabel('Time') 
        plt.ylabel(name) 
        plt.title('Time against' + name)
        #plt.show()
        plt.clf()
        
    plotListBetter(data, " Sound ", len(data), duration)

    def boxFilter(L):
        """
        Genearte box filter of length L
        """
        h = np.ones(L)
        return h/np.sum(h)

    def triangleFilter(L):
        """
        Generate triangle filter of length L
        """
        h = np.convolve(boxFilter(L//2), boxFilter(L//2))
        h = np.concatenate(([0],h))
        if L % 2: h = np.concatenate((h,[0]))
        return h/np.sum(h)

    def noise_reduction(data):
        # ============================================================================
        #define box length and low filter length
        low_length = len(data)
        box_length = len(data)

        #call the low pass triangle filter for above length
        filtre = triangleFilter(low_length)
        flat_dat = data.flatten()

        #subtract out low pass, calculate high pass
        low = np.convolve(filtre, flat_dat)
        low_cut = low[int((low_length-1)/2):int((len(flat_dat))+((low_length-1)/2))]
        high = flat_dat-low_cut

        #apply box filter
        box = np.convolve(high, boxFilter(box_length))
        box_cut = box[int(box_length/2):int(10001+(box_length-2)/2)]

        plotListBetter(high, " Sound ", len(high), duration)
        plotListBetter(box_cut, " Sound ", len(box_cut), duration)

        return high

    high = noise_reduction(data)

    wavio.write("noise_reduced.wav", high, rate*2, sampwidth=1)
