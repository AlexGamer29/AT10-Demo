<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class APIController extends Controller
{
    public function getProducts()
    {
        $productList = Product::all();
        return response()->json($productList);
    }
}