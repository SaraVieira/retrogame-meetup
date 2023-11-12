import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<{
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
  }>({});
  const route = usePathname();
  const getUser = async () => {
    const user = await fetch(
      `/api/user?id=${route.split("/signups/")[1]}`
    ).then((rsp) => rsp.json());

    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return user;
};
