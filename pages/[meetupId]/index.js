import MeetupDetails from "@/components/meetups/MeetupDetails";
const MeetupDetail = (props) => {
  return (
    <MeetupDetails
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG/800px-Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG"
      }
      title={"a first meet up"}
      address={"Some Street 5, Some City"}
      description={"The Meetup description"}
    />
  );
};
export default MeetupDetail;
