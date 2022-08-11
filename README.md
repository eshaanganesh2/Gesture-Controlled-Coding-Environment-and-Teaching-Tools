# Gesture Based Interaction in EdTech

This project consists of 2 main components:
* **Gesture Controlled Coding IDE**: The coding environment consists of a Gesture controlled mouse on a coding editor built from scratch. The Gesture controlled mouse involves using finger movements to perform the moving and clicking operations of a mouse. Consequently, the user would then be able to generate the code for a particular programming construct (by clicking on the construct name from an available list) and would have 4 languages to choose from (C++, Java, Python and JavaScript).   
* **Gesture Controlled Presentation Navigation**: Through this component, users would be able to navigate across any presentation by the means of hand gestures.
## Usage

**Step 1:**

Install Python from the following link: https://www.python.org/downloads/

**Step 2:**

Clone this repo by using the code below

```
git clone https://github.com/eshaanganesh2/Gesture-Controlled-Coding-Environment-and-Teaching-Tools.git
```

**Step 3:**

Execute the following command to install the required dependencies 

```
pip install -r requirements.txt
```

**Step 4:**

In order to execute the **Gesture Controlled Coding IDE** component:
* Navigate to the ```Coding editor``` folder and open the ```index.html``` file in your browser.
* Run the python script `AIVirtualMouse.py` by executing the command ```python AIVirtualMouse.py```

In order to execute the **Gesture Controlled Presentation Navigation** component:
* Create a folder ```ppt``` in the root directory of the project and store the images of your presentation in the folder
* Run the python script `AIPPTControl.py` by executing the command ```python AIPPTControl.py```

## Demo (Demo GIFs may take 1-2 minutes to load :exclamation:)

<h3> <ins> Gesture Controlled Coding IDE </ins> </h3>
The user would move the cursor while having his/her index finger raised. In order to perform the click operation of the mouse, the user would have to raise his/her index and middle fingers.

<br><img src="https://github.com/eshaanganesh2/Gesture-Controlled-Coding-Environment-and-Teaching-Tools/blob/main/demo/gesture_coding_editor.gif" width="512"/>

<h3> <ins> Gesture Controlled Presentation Navigation </ins> </h3>
The user would move to the next slide by lifting his/her right hand and by having the little finger raised. In order to move to the previous slides, the user would need to have his/her thumb raised.

<br><img src="https://github.com/eshaanganesh2/Gesture-Controlled-Coding-Environment-and-Teaching-Tools/blob/main/demo/gesture_ppt_navigation.gif" width="512"/>
