"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

const BASE_URL = "https://www.quadrasecurity.in";

const Canonical = () => {
  const pathname = usePathname();
  const canonicalUrl = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default Canonical;
