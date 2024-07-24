import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPostForm from "@/components/addPostForm/addPostForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
        <div className={styles.col}>
          <AdminPostForm userId = {session.user.id} />
        </div>
    </div>
  );
};

export default AdminPage;
