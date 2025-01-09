import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="pt-28 pb-10 flex flex-col flex-row items-center">
          <img src="/assets/images/monogram.svg" width={50} />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
