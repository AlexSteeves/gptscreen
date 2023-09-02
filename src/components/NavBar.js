export default function NavBar({ color }) {

    const midBar = "text-xl font-sans font-thin drop-shadow-sm hover:underline hover:underline-offset-8 mr-8";
  return (
    <div
      className="h-[10vh] w-screen flex pt-2 cursor-pointer"
      style={{ color: color }}
    >
      <ul className="justify-start items-center flex ml-10 ">
        <li className="items-center text-3xl font-sans font-normal drop-shadow-ms ">
        Open AI
        </li>
      </ul>

      <ul class="justify-center items-center flex ml-auto ">
        <li className={midBar}>
          Research
        </li>
        <li className={midBar}>
          API
        </li>
        <li className={midBar}>
          ChatGPT
        </li>
        <li className={midBar}>
          Saftey
        </li>
      </ul>

      <ul class="justify-end items-center flex ml-auto mr-10">
        <li className="text-xl font-sans font-normal drop-shadow-sm px-5">
          Search
        </li>
        <li className="text-xl font-sans font-normal drop-shadow-sm px-5">
          Log In
        </li>

        <li className="text-xl font-sans font-normal drop-shadow-sm px-5">
          Get Started
        </li>
      </ul>
    </div>
  );
}
