import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../services/FirebaseService";

export const sortByAscending = (property: string, objectArray: any[]) => {
  return objectArray.sort((a: any, b: any) => {
    return a[property].toLowerCase() < b[property].toLowerCase() ? -1 : 1;
  });
};
export const sortByDescending = (property: string, objectArray: any[]) => {
  return objectArray.sort((a: any, b: any) => {
    return b[property].toLowerCase() > a[property].toLowerCase() ? 1 : -1;
  });
};
export const SliceString = (value: string, length: number = 15) => {
  if (value.length < length) {
    return value;
  }
  return value.slice(0, length) + "...";
};

export const SliceStringWithoutDots = (value: string, length: number = 15) => {
  if (value.length < length) {
    return value;
  }
  return value.slice(0, length);
};
export const delay = (time: number) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
};
export const GetFileSize = (file: File) => {
  if (file) {
    return file.size / 1024 / 1024; // Return size in MB
  }
  throw new Error("No File Found");
};

export const IsRemoteFile = (url: string): boolean => {
  return url.startsWith("http");
};

export const uploadImageToFirebase = (
  folder: string,
  file: File
): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, `${folder}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          reject("Uploading Fail");
        },

        () => {
          getDownloadURL(uploadTask.snapshot?.ref).then((downloadURL) => {
            // console.log("download urlAlphabet/", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
