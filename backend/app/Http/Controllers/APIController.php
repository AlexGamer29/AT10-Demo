<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

class APIController extends Controller
{
    public function getProducts()
    {
        $foodList = Food::all();
        return response()->json($foodList);
    }
}
