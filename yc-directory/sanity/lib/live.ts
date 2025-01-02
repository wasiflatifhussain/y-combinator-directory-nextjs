import "server-only";   // this file is only used in the server

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const {sanityFetch, SanityLive} = defineLive({client});