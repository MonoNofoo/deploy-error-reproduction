import serverActionFunction from "@/app/_server-action/serverActionFunction";

export default function Home() {
  return (
    <main>
      <p>server action error</p>
      <button type="button" onClick={async () => {
        const text = await serverActionFunction();

        console.log(text);
      }}>click!</button>
    </main>
  );
}
