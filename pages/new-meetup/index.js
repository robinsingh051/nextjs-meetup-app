import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import axios from "axios";
const NewMeetupPage = (props) => {
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);
    const response = await axios.post("/api/new-meetup", enteredMeetupData);
    const data = response.data;
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
