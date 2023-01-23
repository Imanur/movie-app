import React from "react";
import { Link, Head } from "@inertiajs/react";
import MovieList from "@/Components/Homepage/MovieList";
import Navbar from "@/Components/Navbar";

export default function Homepage(props) {
    console.log("props : ", props);
    return (
        <div className="bg-dark">
            <Head title={props.title} />
            <Navbar />
            <div className="movie-container flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <MovieList MovieList={props.movie_popular.results} />
            </div>
        </div>
    );
}
