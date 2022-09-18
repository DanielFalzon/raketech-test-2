<?php

namespace App\Repositories;

use App\Interfaces\TeamRepositoryInterface;
use Illuminate\Support\Facades\Http;

class TeamRepository implements TeamRepositoryInterface
{
    public function getTeamsByLeague(string $leagueSlug)
    {
        $encodedSlug = urlencode($leagueSlug);

        $response = Http::get("https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l={$encodedSlug}");

        $response->throw();

        $result = $response->collect('teams')->map(function ($item, $key){
            return collect($item)->only(['idTeam', 'strTeam', 'intFormedYear', 'strStadium', 'strStadiumThumb', 'strStadiumDescription',
                'strFacebook', 'strTwitter', 'strInstagram', 'strDescriptionEn', 'strWebsite', 'strTeamBadge', 'strGender', 'strCountry']);
        })->mapWithKeys(function($item, $key){
            return [$item['idTeam'] => $item];
        });

        return $result->all();
    }
}