import Container from "@/app/_components/container";

export default function Index() {
  return (
    <>
      <div className="flex flex-col items-center center justify-items-center bg-[url('/assets/images/headers/header-image_schedule.jpg')] md:rounded-xl overflow-hidden bg-center bg-cover">
        <h1 className="text-white my-20">Schedule</h1>
      </div>
      <div className="text-center pt-12 mx-8">
        <div className="hidden md:block">
          <img className="mx-auto" src="/assets/images/timeline_desktop.svg" />
        </div>
        <div className="md:hidden">
          <img className="mx-auto" src="/assets/images/timeline_mobile.svg" />
        </div>
      </div>
    </>
  );
}
