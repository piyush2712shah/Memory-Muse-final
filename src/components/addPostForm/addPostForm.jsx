"use client"

import { addPost } from "@/lib/action";
import styles from "./addPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Memory</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      {/* <input type="text" name="slug" placeholder="slug" /> */}
      <input type="text" name="img" placeholder="Image link" />
      <textarea type="text" name="desc" placeholder="Description" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
