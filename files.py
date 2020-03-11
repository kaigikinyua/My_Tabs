import os
import time

from database import Database

class Files:
    #add file to db
    @staticmethod
    def add_file(filepath,fileType):
        f=Files()
        filename=f.get_filename(filepath)
        D=Database()
        D.add_file(filepath,filename,fileType)

    #check for other directories within the directory
    @staticmethod
    def add_folder(folderpath,fileType):
        f=Files()
        contents=f.list_dir(folderpath)
        for content in contents:
            if(f.is_file(folderpath+"/"+str(content))):
                Files.add_file(folder+"/"+str(content),fileType)

    @staticmethod
    def remove_files(filepath):
        pass

    @staticmethod
    def remove_folder(folderpath):
        pass

    def select_all_files_from_folder(self,folderpath):
        pass

    def get_filename(self,file_path):
        split_data=file_path.split("/")
        return split_data[len(split_data)-1]
    
    def is_file(self,filepath):
        if(os.path.isfile(filepath)):
            return True
        else:
            False

    def list_dir(self,folder_path):
        contents=os.listdir(folder_path)
        return contents
class FileLogs:
    def added_files(filepath):
        #get current time of the action
        pass


