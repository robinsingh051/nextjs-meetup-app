import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG/800px-Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG",
    address: "Brihadeeswara Temple",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG/800px-Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG",
    address: "Brihadeeswara Temple",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG/800px-Gopuram_Corner_View_of_Thanjavur_Brihadeeswara_Temple..JPG",
    address: "Brihadeeswara Temple",
    description: "This is a third meetup!",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
