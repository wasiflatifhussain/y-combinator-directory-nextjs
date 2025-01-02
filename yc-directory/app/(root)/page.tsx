import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>;
}) {

  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'Wasif Hussain'},
    _id: 1,
    description: 'This is a description',
    image: "https://media.npr.org/assets/img/2024/01/09/gettyimages-1252004827-1c09e2b4f6f376083b4ff478d6c99bfc14e1a3a5.jpg?s=1100&c=85&f=jpeg",
    category: "Robots",
    title: "We Robots",
  }]
  return (
    <>

      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            )))
          : 
          (
            <></>
          )}
        </ul>
      </section>
    </>
  );
}
