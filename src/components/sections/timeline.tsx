export function Timeline({items}: {items: Array<{year: string; title: string; text: string}>}) {
  return (
    <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
      {items.map((item) => (
        <div key={item.year} className="border-t-2 border-academy-red pt-4">
          <div className="text-2xl font-bold text-academy-red">{item.year}</div>
          <h3 className="mt-4 font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-academy-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
