import server as s
import os
import encryptit as e

def create(userid):
    key = os.urandom(32)
    user_name = input("Enter Username")
    npasswd = int(input("Enter number Passwd"))
    passph1 = input("Enter Passphrase:")
    iv, passph = e.encrypt_AES(passph1, key)
    flag = s.sign_up(userid,npasswd,passph,iv,key)
    if flag == 1:
        print("login successful")
    else:
        print("login unsuccessful")

