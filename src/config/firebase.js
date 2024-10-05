import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, orderBy, query, serverTimestamp, setDoc, updateDoc, where, limit } from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage();

export async function signup(email, password) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export async function signin(email, password) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export async function signout() {
  await signOut(auth)
  return true;
};

export async function getUser(id) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  return docSnap
}

export async function setUser(id, email) {
  await setDoc(doc(db, 'users', id), { email: email, type: 'admin' });
}

export async function uploadFile(file) {
  const storageRef = ref(storage, file.name);
  const response = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(response.ref);
  return url;
}

export async function deleteFile(name) {
  const storageRef = ref(storage, name);
  deleteObject(storageRef);
}

export async function createHealthCareProfessional(data) {
  const docRef = await addDoc(collection(db, "professionals"), { ...data, createdAt: serverTimestamp() });
}

export async function createUserAppointment(data) {
  const docRef = await addDoc(collection(db, "appointments"), { ...data, createdAt: serverTimestamp() });
}

export async function createJobApplication(data) {
  const docRef = await addDoc(collection(db, "jobApplications"), { ...data, createdAt: serverTimestamp() });
}

export async function createJob(data) {
  const docRef = await addDoc(collection(db, "jobs"), { ...data, createdAt: serverTimestamp() });
}

export async function createBlogPost(data) {
  const docRef = await addDoc(collection(db, "blogs"), { ...data, createdAt: serverTimestamp() });
}

export async function editJob(id, data) {
  const docRef = await updateDoc(doc(db, 'jobs', id), data);
}

export async function editBlogPost(id, data) {
  const docRef = await updateDoc(doc(db, 'blogs', id), data);
}

export async function getUserAppointments() {
  const docs = await getDocs(query(collection(db, "appointments"), orderBy("createdAt", "desc")));
  let usersArray = [];
  docs.forEach((doc) => { usersArray.push({ id: doc.id, ...doc.data()}) });
  return usersArray;
}

export async function getHealthCareProfessionals() {
  const docs = await getDocs(query(collection(db, "professionals"), orderBy("createdAt", "desc")));
  let professionals = [];
  docs.forEach((doc) => { professionals.push({ id: doc.id, ...doc.data()}) });
  return professionals;
}

export async function getJobApplications() {
  const docs = await getDocs(query(collection(db, "jobApplications"), orderBy("createdAt", "desc")));
  let jobApplications = [];
  docs.forEach((doc) => { jobApplications.push({ id: doc.id, ...doc.data()}) });
  return jobApplications;
}

export async function getJobs() {
  const docs = await getDocs(query(collection(db, "jobs"), orderBy("createdAt", "desc")));
  let jobs = [];
  docs.forEach((doc) => { jobs.push({ id: doc.id, ...doc.data()}) });
  return jobs;
}

export async function getBlogPosts() {
  const docs = await getDocs(query(collection(db, "blogs"), orderBy("createdAt", "desc")));
  let blogs = [];
  docs.forEach((doc) => { blogs.push({ id: doc.id, ...doc.data()}) });
  return blogs;
}

export async function getTopBlogPosts(n) {
  const docs = await getDocs(query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(n)));
  let blogs = [];
  docs.forEach((doc) => { blogs.push({ id: doc.id, ...doc.data()}) });
  return blogs;
}

export async function getBlogPost(slug) {
  const docs = await getDocs(query(collection(db, "blogs"), where('slug', '==', slug)));

  if (docs.size === 0) throw new Error('No such blog exist');
  
  let blog;
  docs.forEach((doc) => {
    blog = { id: doc.id, ...doc.data() }
  });
  return blog;
}

export async function deleteUserAppointments(id) {
  await deleteDoc(doc(db, "appointments", id));
  return true;
}

export async function deleteJobApplication(id) {
  await deleteDoc(doc(db, "jobApplications", id));
  return true;
}

export async function deleteJob(id) {
  await deleteDoc(doc(db, "jobs", id));
  return true;
}

export async function deleteHealthCareProfessionals(id) {
  await deleteDoc(doc(db, "professionals", id));
  return true;
}

export async function deleteBlog(id) {
  await deleteDoc(doc(db, "blogs", id));
  return true;
}
