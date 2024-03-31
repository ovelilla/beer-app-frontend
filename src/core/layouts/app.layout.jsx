// Vendors
import { Outlet } from "react-router-dom";
// Components
import { Header } from "@/components/header/header.component";
import { Container } from "@/components/container/container.component";

const AppLayout = () => {
  return (
    <div className="flex grow flex-col w-full">
      <Header />

      <main className="flex grow w-full">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default AppLayout;
