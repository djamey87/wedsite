import Container from "@/app/_components/container";

export default function Index() {
  return (
    <main>
      <Container>
        <div className="text-center">
          <p>Please find below the schedule for our special day</p>
          <img className="mx-auto pt-20" src="/assets/images/timeline.svg" />
        </div>
      </Container>
    </main>
  );
}
