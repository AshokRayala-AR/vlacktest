export default function Button({ item }) {
  return (
    <div>
      <button className="px-8 py-2 bg-customBeige text-black rounded-full">
        {item.btnDescription}
      </button>
    </div>
  );
}
