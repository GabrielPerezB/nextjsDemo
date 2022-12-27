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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// this is for pre-render with async data, always on server not on client side
export async function getStaticProps() {
  //fetch data from an API ...
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    // this will be re-generated certain amount of seconds at server-side after is build/deployed, 
    // in order to fetch updated data
    revalidate: 10
  };
}

// // this is for pre-render with async data, always on server not on client side
// export async function getServerSideProps(context) {
//   //fetch data from an API ...
//   // This runs for every incoming request, don't needs revalidate 

//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;
