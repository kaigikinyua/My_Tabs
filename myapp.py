import os
import threading
import webbrowser
import time


from gui import Output
from files import Files


class MyApp:
    def __init__(self):
        self.server_running=False

    @staticmethod
    def start_browser():
        webbrowser.open("http://localhost:4000")

    def server():
        if(self.server_running!=True):
            server=threading.Thread(target=self.start_server,name="serverthread",args=())
            server.start()
        else:
            print("Server already running")

    def start_server():
        error=os.system("node ./server/server.js")
        if(error):
            print("Could not start server")
        else:
            self.server_running=True

    def add_file(self):
        file_path=input("Enter filename\n")
        fileType=input("Add file as 1->audio or 2->video?")
        if(os.path.isfile(file_path)):
            Output.success("adding file")
            if(fileType=="2"):
                Files.add_file(file_path,"video")
            else:
                Files.add_file(file_path,"audio")
        else:
            Output.display_error("Selected file path is not a file")

    def add_directory(self):
        folder_path=input("Enter folder path\n")
        file_type=input("Add folder contents as of type?\n1->audio\n2->video\n")
        if(os.path.isdir(folder_path)):
            Output.success("Adding files in dir "+str(folder_path))
            F=Files()
            if(file_type==2):
                F.add_folder(folder_path,"video")
            else:
                F.add_folder(folder_path,"audio")
        else:
            Output.display_error("Selected folder does not exist")

    
    def flow(self):
        ans=input("What do you want to do\n 1.Add file\n2.Add a folder\n")
        if(ans=="1"):
            self.add_file()
        elif(ans=="2"):
            self.add_directory()
        else:
            print("Unknown choice")

M=MyApp()
M.flow()
