import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/addacf68-734d-474f-80e2-4ea4a25fe420-u49f5u.png",
  "https://utfs.io/f/71bf461a-29c3-41ee-ad1f-00fcae6802a6-9269hu.png",
  "https://utfs.io/f/53074445-1b44-4e47-9e23-0fda72a624bf-1kgqv6.png",
  "https://utfs.io/f/cf0f0625-f4b2-4cf9-ad6b-8268b5d59002-28i5.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
