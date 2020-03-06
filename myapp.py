
import os
import threading
import webbrowser

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