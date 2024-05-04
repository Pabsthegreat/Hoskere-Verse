import server as m
import encryptit as e
def logindetails(userid):
    user_name = input("Enter Username")
    npasswd = int(input("Enter number Passwd"))
    passph = input("Enter Passphrase:")

    npasswd,passph1,key,iv = m.login(userid,npasswd,passph,key,iv)
    actual = e.decrypt_AES(iv,passph1,key)
    if actual == passph:
        print("login successful")
    else:
        print("login unsuccessful")