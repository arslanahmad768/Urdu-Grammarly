from email.policy import HTTP
from gettext import install
from pydoc import visiblename
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.http import JsonResponse
from django.template import context
from joblib import PrintTime
from tensorflow import keras
import tensorflow as tf
from keras import backend

from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
class UserViewSets(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

from tensorflow.keras.models import load_model
import nltk
# nltk.download('punkt')
# importing jaccard distance
# and ngrams from nltk.util
from nltk.metrics.distance import jaccard_distance
from nltk.util import ngrams
from nltk.tokenize import word_tokenize
import numpy as np
import pickle
import re
from django.utils.encoding import smart_str
model = load_model("nextword1.h5")
tokenizer = pickle.load(open("tokenizer1.pkl","rb"))

dct = pickle.load(open("dct.pkl","rb"))
dct1 = pickle.load(open("dict1.pkl","rb"))
distinct_tokens = pickle.load(open("distinct_tokens.pkl","rb"))
probability_table = pickle.load(open("probability_table.pkl","rb"))
# Create your views here.

def prediction(request):
    # print(request.body)
    # return HttpResponse({'score':1})
    # if request.method=='POST':
    # request.setHeader("Access-Control-Allow-Headers: content-type")
    
    text = request.body
    text = text.decode()
    print(text)
    text = text.strip('""')
    print("datatype is ",type(text))
    print("called")
    text = text.split(" ")
    text = text[-3:]
    print("Text is :",text)
    sequence = tokenizer.texts_to_sequences([text])
    sequence = np.array(sequence)
    
    preds_array = np.argsort(model.predict(sequence))
    arrlist = preds_array.tolist()[0]
    last3 = arrlist[-5:]
    predicted_word = []
    # print("Array list will be",arrlist)
    for i in reversed(last3):
        for key, value in tokenizer.word_index.items():
            if value == i:
                predicted_word.append(key)
                break     
    print("predicted word will be:",predicted_word)           
    success = {
        "result" : predicted_word,
    }
    print("predicted word will be:",success["result"])
    return JsonResponse(success)

def correction(request):
        data = pickle.load(open("corpus.pkl","rb"))
        print("called Correction!")
        corr_result = []
        incorrect_words = request.body
        print("First String is :",incorrect_words)
        incorrect_words = incorrect_words.decode()
        # incorrect_words = smart_str(incorrect_words, encoding='utf-8', strings_only=True, errors='strict')
        print("Data type is :",type(incorrect_words))
        print("Incorrect word is :",incorrect_words)
        incorrect_words = word_tokenize(incorrect_words)
        incorrect_words.pop(0)
        incorrect_words.pop(-1)
        print("tokenized data is :",incorrect_words)
        
        print("After Updatation the tokenized data is :",incorrect_words)
        for word in incorrect_words:
            temp = [(jaccard_distance(set(ngrams(word, 2)),set(ngrams(w, 2))),w)	    
                    for w in data if w[0]==word[0]]
            corr_result.append(sorted(temp, key = lambda val:val[0])[0][1])

        corr_result = " ".join(corr_result)
        corr_words = 0
        incorr_words = 0
        # correct_words = []
        for i in incorrect_words:
            for j in data:
                if i == j:
                    corr_words+=1
                    break

        incorr_words = len(incorrect_words) - corr_words
        context = {
                    "cor_result":corr_result,
                    "input_Correct":corr_words,
                    "input_Incorrect":incorr_words,
                }
        print("Result is ",context["cor_result"])
        print("Correct Words is :",corr_words)
        print("Incorrect Words is :",incorr_words)
        return JsonResponse(context)

def grammar(request):
    # if request.method=='POST':
    # text = request.POST.get('text1')
    text = request.body
    text = text.decode()
    def preprocess(text):
        text="eos "+ text 
        text=text.replace("-","eos")
        return text
    text=preprocess(text)
    
    def generate_tokens(text):
        tokens = word_tokenize(text)
        return tokens

    tokens=generate_tokens(text)
    # distinct_tokens2 = list(set(sorted(tokens)))
    
    def generate_ngrams(tokens,k):
        l=[]
        i=0
        while(i<len(tokens)):
            l.append(tokens[i:i+k])
            i=i+1
        l=l[:-1]
        return l
    
    
    p = preprocess(text)
    t = generate_tokens(p)
    n = generate_ngrams(t,2)
    s=0
    

    for i in n:
        k=distinct_tokens.index(i[0])
        m=distinct_tokens.index(i[1])
        s+=probability_table[k][m]
        
    gram_result = s/(len(n)-1)
    context= {
            "gram_result":gram_result
        }
    return JsonResponse(context)
    # return render(request,"grammar.html",context)