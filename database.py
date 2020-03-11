import sqlite3
from gui import Output
import sys
class Database:
    def add_file(self,filepath,filename,fileType):
        sql="INSERT INTO media (Path,Title,Type,Favourite) VALUES('"+filepath+"','"+filename+"','"+fileType+"','no');"
        if(Sql.execute_sql(sql)):
            print("Added file")
        else:
            print("Failed to add file")


class Sql:

    def db_connect(self):
        db=""
        try:
            db=sqlite3.connect("./server/modules/Database/My_Tabs.db")
            Output.success("Connected to database")
        except:
            Output.display_error("Connection to database failed")
            return False
        return db

    @staticmethod
    def execute_sql(sql):
        status=False
        conn=Sql()
        db=conn.db_connect()
        if(db!=False):
            try:
                cursor=db
                cursor.execute(sql)
                db.commit()
                status=True
            except:
                Output.display_error("Could not execute query "+str(sql))
        return status

