<?php

namespace App\Repositories;

use App\Interfaces\SportRepositoryInterface;
use Illuminate\Support\Facades\Http;

class SportRepository implements SportRepositoryInterface
{
    public function getAllSports()
    {
        $response = Http::get("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");

        $response->throw();

        $result = $response->collect('sports')->map(function ($item, $key){
            return collect($item)->only(['strSport', 'strSportIconGreen', 'strSportDescription']);
        })->sortBy(function ($item, $key) {
            return $item->get('strSport');
        });

        return $result->values()->all();
    }
}