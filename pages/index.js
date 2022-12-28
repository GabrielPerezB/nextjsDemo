// our-domain.com/
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

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

// this is for pre-render with async data, always on server not on client side
export async function getStaticProps() {
  //fetch data from an API ...

  // this is executed only on server-side
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.5t8jbvt.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // this will be re-generated certain amount of seconds at server-side after is build/deployed,
    // in order to fetch updated data
    revalidate: 1,
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
