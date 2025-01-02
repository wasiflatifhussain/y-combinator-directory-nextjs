import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || author->name match $search || title match $search ] | order(_createdAt desc) {
      _id,
      title,
      slug,
      _createdAt,
      author->{
        name,
        image,
        _id,
        bio
      },
      views,
      description,
      category,
      image,
    }`
);