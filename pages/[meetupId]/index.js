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

//next js will generate all pages for all meetupIds
export async function getStaticPaths() {
  return {
    fallback: false, //if false means we will get 404 for other ids which are not defined and if it is true the next js will try to generate the page for that id on fly
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //for prerendering, it will run during the build process
  //fetch data from API
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: "m1",
        title: "A First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG/800px-Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG",
        address: "Brihadeeswara Temple",
        description: "This is a first meetup!",
      },
    },
    // revalidate:10  //next js will check for updated data in every 10 seconds
  };
}

export default MeetupDetail;
