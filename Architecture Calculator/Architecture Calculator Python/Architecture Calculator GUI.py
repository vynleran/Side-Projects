# Importing the necessary modules
from tkinter import *
from tkinter import ttk
from functools import partial
from tkinter import font
import math

# Creating a window
window = Tk()

# Specifying the width and legth
window.geometry("370x280")

# Creating the tabs
tabControl = ttk.Notebook(window)

# Creating the font
widgetFont = font.Font(family="Circular", size=12)
resultFont = font.Font(family="Circular", size=12, weight="bold")

########################## Tabs #############################
# Creating tab 1
tab1 = ttk.Frame(tabControl)
tabControl.add(tab1, text = "Feet and Inches : Inches")

# Creating tab 2
tab2 = ttk.Frame(tabControl)
tabControl.add(tab2, text = "Inches : Feet and Inches")

# Creating tab 3
tab3 = ttk.Frame(tabControl)
tabControl.add(tab3, text="Angle Calculator")
########################## Tabs ##############################

########################## Tab 1 #############################
# Creating feet label and positioning it
label1 = Label(tab1, text="feet", font=widgetFont)
label1.grid(row=0, column=0, sticky=W, padx=15, pady=15)

# Creating and positioning the entry label for feet
entry1 = Entry(tab1)
entry1.grid(row=0, column=1, padx=15, pady=15)

# Creating inches label and positioning it
label2 = Label(tab1, text="inch", font=widgetFont)
label2.grid(row=1, column=0, sticky=W, padx=15, pady=15)

# Creating and positioning the entry label for inches
entry2 = Entry(tab1)
entry2.grid(row=1, column=1, padx=15, pady=15)

# Creating and positioning the result label
labelResult = Label(tab1, text="Result: ", font=resultFont)
labelResult.grid(row=3, column=0, sticky=W, padx=15, pady=15)

# Function for converting
def convert(labelResult, entry1, entry2):       # Formal parameters are the entries entered by the user and result label
    feet = entry1.get()
    inches = entry2.get()
    feetCal = float(feet) * 12
    answer = feetCal + float(inches)
    # Configuring the result label according to the answer
    labelResult.config(text="Result: " + str(answer) + " inches")

# Function for clearing everything
def clear(labelResult, entry1, entry2):
    labelResult.config(text="Result:")
    entry1.delete(0, END)
    entry2.delete(0, END)

# Using partial to run the convert function and its parameters
convert = partial(convert, labelResult, entry1, entry2)     # Function and its parameters

# Using partial to run AC function and its parameters
clear = partial(clear, labelResult, entry1, entry2)     # Function and its parameters

# Creating and positioning the convert button
button1 = Button(tab1, text="Convert", command=convert, bg="chartreuse2", font=widgetFont)
button1.grid(row=2, column=1, sticky=W+E, padx=15, pady=15)

# Creating and positioning the AC button
button2 = Button(tab1, text="AC", bg="salmon1", command=clear, font=widgetFont)
button2.grid(row=2, column=0, sticky=E+W, padx=15, pady=15)
########################## Tab 1 #############################

########################## Tab 2 #############################
# Creating feet label and positioning it
label1 = Label(tab2, text="inch", font=widgetFont)
label1.grid(row=0, column=0, sticky=W, padx=15, pady=15)

# Creating and positioning the entry label for feet
entry1 = Entry(tab2)
entry1.grid(row=0, column=1, padx=15, pady=15)

# Creating and positioning the result label
labelResult = Label(tab2, text="Result: ", font=resultFont)
labelResult.grid(row=3, column=0, sticky=W, padx=15, pady=15)

# Function for converting
def convert(labelResult, entry1, entry2):       # Formal parameters are the entries entered by the user and result label
    inches = entry1.get()
    inchCal = float(inches) % 12
    feetcal = float(inches) / 12
    finalfeet = math.floor(feetcal)
    labelResult.config(text="Result: " + str(finalfeet) + " feet and " + str(inchCal) + " inches." )

# Function for clearing everything
def clear(labelResult, entry1, entry2):
    labelResult.config(text="Result:")
    entry1.delete(0, END)
    entry2.delete(0, END)

# Using partial to run the convert function and its parameters
convert = partial(convert, labelResult, entry1, entry2)     # Function and its parameters

# Using partial to run AC function and its parameters
clear = partial(clear, labelResult, entry1, entry2)     # Function and its parameters

# Creating and positioning the convert button
button1 = Button(tab2, text="Convert", command=convert, bg="chartreuse2", font=widgetFont)
button1.grid(row=2, column=1, sticky=W+E, padx=15, pady=15)

# Creating and positioning the AC button
button2 = Button(tab2, text="AC", bg="salmon1", command=clear, font=widgetFont)
button2.grid(row=2, column=0, sticky=E+W, padx=15, pady=15)
########################## Tab 2 #############################

########################## Tab 3 #############################
# Creating feet label and positioning it
label1 = Label(tab3, text="opposite Side", font=widgetFont)
label1.grid(row=0, column=0, sticky=W, padx=15, pady=15)

# Creating and positioning the entry label for feet
entry1 = Entry(tab3)
entry1.grid(row=0, column=1, padx=15, pady=15)

# Creating inches label and positioning it
label2 = Label(tab3, text="adjacent Side", font=widgetFont)
label2.grid(row=1, column=0, sticky=W, padx=15, pady=15)

'''
# Adding the triangle image
img = PhotoImage("pictureEdited.png")
label3 = Label(tab3, image=img)
label3.image = img
label3.grid(row=0, column=2, rowspan=2, columnspan=2, sticky=N+W+S+E)
'''

# Creating and positioning the entry label for inches
entry2 = Entry(tab3)
entry2.grid(row=1, column=1, padx=15, pady=15)

# Creating and positioning the result label
labelResult = Label(tab3, text="Result: ", font=resultFont)
labelResult.grid(row=3, column=0, sticky=W, padx=15, pady=15)

# Function for converting
def convert(labelResult, entry1, entry2):       # Formal parameters are the entries entered by the user and result label
    opposite = entry1.get()
    adjacent = entry2.get()
    angle = float(opposite) / float(adjacent)
    angleFinal = math.atan(angle)
    angleCalc = math.degrees(angleFinal)
    # Configuring the result label according to the answer
    labelResult.config(text="Result: " + str(angleCalc) + " degrees")

# Function for clearing everything
def clear(labelResult, entry1, entry2):
    labelResult.config(text="Result:")
    entry1.delete(0, END)
    entry2.delete(0, END)

# Using partial to run the convert function and its parameters
convert = partial(convert, labelResult, entry1, entry2)     # Function and its parameters

# Using partial to run AC function and its parameters
clear = partial(clear, labelResult, entry1, entry2)     # Function and its parameters

# Creating and positioning the convert button
button1 = Button(tab3, text="Calculate", command=convert, bg="chartreuse2", font=widgetFont)
button1.grid(row=2, column=1, sticky=W+E, padx=15, pady=15)

# Creating and positioning the AC button
button2 = Button(tab3, text="AC", bg="salmon1", command=clear, font=widgetFont)
button2.grid(row=2, column=0, sticky=E+W, padx=15, pady=15)
########################## Tab 3 #############################

# Giving the window a title
window.title("Measurement Converter")

# Executing the tabs
tabControl.pack(expand=1, fill="both")

# Executing the window
window.mainloop()