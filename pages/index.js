import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  //for prerendering, it will run during the build process
  //fetch data from API

  const client = await MongoClient.connect(process.env.URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetUps = await meetupsCollection.find().toArray();
  const updatedMeetups = meetUps.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  }));

  client.close();

  return {
    props: {
      meetups: updatedMeetups,
    },
    revalidate: 1, //next js will check for updated data in every 10 seconds
  };
}

// export async function getServerSideProps(context) {
//   //for prerendering, it will run for every request in the server
//   //fetch data from API
//   //   const req = context.req;
//   //   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
