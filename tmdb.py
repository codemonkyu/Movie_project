import requests
import json

TMDB_API_KEY = "tmdb api"


def get_movie_datas():
    total_data = []

    for i in range(1, 151):
        request_url = f"https://api.themoviedb.org/3/movie/popular?api_key={TMDB_API_KEY}&language=ko-KR&page={i}"
        res = requests.get(request_url)
        movies = res.json()

        print(movies['total_results'])
        print(movies['total_pages'])
        for movie in movies['results']:
            if movie.get('release_date', ''):
                movie_id = movie['id']
                url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={TMDB_API_KEY}&language=ko-KR"
                movie_detail = requests.get(url).json()
                print(movie_detail)
                fields = {
                    'title': movie['title'],
                    'release_date': movie['release_date'],
                    'vote_count': movie['vote_count'],
                    'vote_average': movie['vote_average'],
                    'overview': movie['overview'],
                    'poster_path': movie['poster_path'],
                    'genres': movie['genre_ids'],
                    'runtime': movie_detail['runtime'],
                    'original_title': movie['original_title'],
                    'popularity':movie['popularity'],
                    'adult':movie['adult'],
                    'backdrop_path':movie['backdrop_path']
                }

                data = {
                    "model": "movies.movie",
                    "pk": movie['id'],
                    "fields": fields
                }

                total_data.append(data)

    with open("./movies.json", "w", encoding="utf-8") as w:
        json.dump(total_data, w, ensure_ascii=False, indent=4)


get_movie_datas()
