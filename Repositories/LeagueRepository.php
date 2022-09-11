<?php

namespace App\Repositories;

use App\Interfaces\LeagueRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\Http;

class LeagueRepository implements LeagueRepositoryInterface
{
    public function getAllLeagues()
    {
        $response = Http::get("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php");

        $response->throw();

        $result = $response->collect('leagues')->map(function ($item, $key){
            return collect($item)->only(['strLeague', 'strSport']);
        });

        return $result;
    }
    
    public function getLeagueBySport(?string $sportSlug)
    {
        $result = $this->getAllLeagues();
        if(isset($sportSlug)){
            $result = $result->filter(function ($item, $key) use ($sportSlug) {
                return $item['strSport'] == $sportSlug;
            });
        }
        return $result->all();
    }
}