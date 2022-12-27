// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
    address: "La Tigra",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
    address: "La Perla",
    description: "This is a Second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
