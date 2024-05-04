import mysql.connector as m
import encryptit as e
if __name__ != '__main__':
    def sign_up(userid, npasswd,passph,iv,key):            
            con = m.connect(host = 'localhost', username = 'root', passwd = 'dashmaharaj05', db = 'project')
            if con.is_connected():
                mycursor = con.cursor()
                try:
                    query1 = "insert into login(user id,npasswd,passph,iv,key) values("+userid+","+npasswd+","+passph+","+iv+","+key+")"
                    mycursor.execute(query1)
                    con.commit()
                    con.close()
                    return 1
                except Exception as ex:
                    con.close()
                    return ex
    def login(userid, npasswd,passph):            
            con = m.connect(host = 'localhost', username = 'root', passwd = 'dashmaharaj05', db = 'project')
            if con.is_connected():
                mycursor = con.cursor()
                try:
                    query1 = "insert into login(user id,npasswd,passph,iv,key) values("+userid+","+npasswd+","+passph+","+iv+","+key+")"
                    mycursor.execute(query1)
                    mycursor.get()
                    con.commit()
                    con.close()
                    return 1
                except Exception as ex:
                    con.close()
                    return ex
            
    def delete_acc(userid, npasswd,passph):            
        con = m.connect(host = 'localhost', username = 'root', passwd = 'dashmaharaj05', db = 'project')
        if con.is_connected():
            mycursor = con.cursor()

            login()
            try:
                query1 = "insert into login(user id,npasswd,passph,iv,key) values("+userid+","+npasswd+","+passph+","+iv+","+key+")"
                mycursor.execute(query1)
                con.commit()
                con.close()
                return 1
            except Exception as ex:
                con.close()
                return ex
        
            
