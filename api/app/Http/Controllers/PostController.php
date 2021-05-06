<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PostController extends Controller
{
   
    public function index()
    {
        return Post::all();
    }

    
    public function store(Request $request)
    {
        request()->validate([
            'title' => 'required',
            'site' => 'required',
            'author_name' => 'required',
            'description' => 'required',
            'comment_count' => 'required',
        ]);

        return Post::create([
            'title' => request('title'),
            'site' => request('site'),
            'author_name' => request('author_name'),
            'description' => request('description'),
            'comment_count' => request('comment_count'),
        ]);
    }

    public function bydate()
    {
        $sorted = Post::orderBy('created_at', 'desc')->get();
        return $sorted;
    }

    public function sourcemedia(Request $request,$search)
    {
        $posts = Post::where('site', '=', $search)->get();
        return $posts;
    }

    public function search(Request $request,$search)
    {
        $posts = Post::where('title', 'LIKE', '%'.$search.'%')->get();
        return $posts;
    }
    public function day(Request $request)
    {          
        $date = Carbon::today()->subDays(1);
        $posts = Post::where('created_at','>=',$date)->get();

        return $posts;
    }
    public function week(Request $request)
    {          
        $date = Carbon::today()->subDays(7);
        $posts = Post::where('created_at','>=',$date)->get();

        return $posts;
    }
    public function month(Request $request)
    {          
        $date = Carbon::today()->subDays(30);
        $posts = Post::where('created_at','>=',$date)->get();

        return $posts;
    }
}
