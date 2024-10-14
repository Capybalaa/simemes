import dynamic from "next/dynamic";

const Content = dynamic(() => import("./components/Content"), {
  ssr: false,
});

export default function Page() {
  return <Content />;
}
