// for route -> /aboutus/:id
import { useRouter } from "next/router";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const SomethingImportant = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const developer = details.find((item) => item.id == id);
  if (developer) {
    return (
      <div>
        <h1>{developer.name}</h1>
        <h2>{developer.role}</h2>
      </div>
    );
  }
  return (
    <>
      <h1>Developer doesn't exist</h1>
    </>
  );
};

export default SomethingImportant;
