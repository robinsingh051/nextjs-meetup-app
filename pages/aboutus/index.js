// for route -> /aboutus
import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutPage = (props) => {
  const detailsElement = details.map((item) => {
    return (
      <li>
        <Link href={`/aboutus/${item.id}`}>{item.name}</Link>
      </li>
    );
  });
  return (
    <>
      <h1>Our Developers</h1>
      <ul>{detailsElement}</ul>
    </>
  );
};

export default AboutPage;
