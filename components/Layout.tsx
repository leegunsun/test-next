import NavBar from "./NavBar";

export default function Layout({ children }: any) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
