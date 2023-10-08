import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import axios from "axios";
import Head from "next/head";
const NewMeetupPage = (props) => {
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await axios.post("/api/new-meetup", enteredMeetupData);
    const data = response.data;
  };
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
