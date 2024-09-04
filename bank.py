
def check_balance():
    pass
   

def cash_deposit():
    amount = float(input("Enter amount to deposit: "))
    
    if amount < 0:
        print("That is not a valid amount")
        return 0
    else:
        return amount

def cash_withdraw():
    amount = float(input('Enter amount to withdraw: '))
    
    if amount > balance:
        print('Insuffient funds')
        
    elif amount > 0:
        print("Amount must br greater than 0")
        
    else:
        return amount


balance = 0
is_running = True

while is_running:
    print("Banking Program")
    print("1.Check Balance")
    print("2.Deposit")
    print("3.Withdrawal")
    print("4. Exit")


choice = input("Enter your choice(1-4):  ")

if choice == '1':
       check_balance()
elif choice =='2':
       cash_deposit()
elif choice == '3':
       balance -= cash_withdraw()
elif choice == '4':
       is_running = False
else:
       print("Your choice is not valid")
       
       print("Tnank you, Have a nice day")



    
    
    
    
    