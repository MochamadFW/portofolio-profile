export default function Header() {
  return (
    <header className="p-4 bg-black border-b-2 border-retro-pink">
      <div className="flex justify-center"> {/* Center the text */}
        <h1 className="font-retro text-retro-blue text-xl md:text-2xl lg:text-3xl">
          MOCHAMADFW
        </h1>
      </div>
    </header>
  );
}