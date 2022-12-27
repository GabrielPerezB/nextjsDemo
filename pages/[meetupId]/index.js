import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg"
      title="A First Meetup"
      description="The meet description"
      address="Some street 5, Some City"
    />
  );
};

// used on dynamic pages to tell nextJS for which dynamic parameter values this page should be pre-generated
export async function getStaticPaths() {
  return {
    fallback: false,
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
    ],
  };
}

export function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
        title: "A First Meetup",
        description: "The meet description",
        address: "Some street 5, Some City",
      },
    },
  };
}

export default MeetupDetails;
