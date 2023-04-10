import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/until");
  }, []);

  return <></>;
};

export default Index;
