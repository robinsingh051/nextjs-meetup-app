import MeetupDetails from "@/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const MeetupDetail = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

//next js will generate all pages for all meetupIds
export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetUps = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  const paths = meetUps.map((meetUp) => ({
    params: {
      meetupId: meetUp._id.toString(),
    },
  }));
  return {
    fallback: false, //if false means we will get 404 for other ids which are not defined and if it is true the next js will try to generate the page for that id on fly
    paths: paths,
  };
}

export async function getStaticProps(context) {
  //for prerendering, it will run during the build process
  //fetch data from API
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetUp = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.title,
        address: selectedMeetUp.address,
        image: selectedMeetUp.image,
        description: selectedMeetUp.description,
      },
    },
    // revalidate:10  //next js will check for updated data in every 10 seconds
  };
}

export default MeetupDetail;
