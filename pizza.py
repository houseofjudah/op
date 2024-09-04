
"""
Created on Wed Jun 12 11:45:45 2024

@author: Tenece
"""
import time

def hello_message():
    print("Welcome to Judah's Pizza Restuaturant")
    print("Enter your desired choice for your pizza toppings")
    pizza_toppings()
    

def pizza_toppings():
    toppings = ["Onions", "Pinnenaple", "Tomatoes", "Mushrooms"]
    request = input('make your desired topping choice: ')
    if request in toppings:
        print(request, "are available")
        soft_drinks()
    else:
        print("Processing...")
        time.sleep(2)
        print(request, "sorry not available")
        quit()


def soft_drinks():
    print("Please order your drinks")
    drinks = ["cola", "juice", "coffee"]
    request = input("Enter your drinks: ")
    if request in drinks:
        print(request, "Is available")
        thank_customer()
    else:
        print("Processing...")
        time.sleep(3)
        print(request, "is currently not available")
    
def thank_customer():
    print("Enjoy your meal")

    thank_customer()

 
   